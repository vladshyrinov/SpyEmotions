import { Component, OnInit } from '@angular/core';
import { AppConsts } from '../../shared/const';
import { Subject } from 'rxjs/Subject';
import { WebcamImage } from '../../modules/webcam/domain/webcam-image';
import { Observable } from 'rxjs/Observable';
import { EmotionsService } from '../../services/emotions.service';
import {Router, ActivatedRoute} from '@angular/router';
import { LsService } from '../../services/ls.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  private imagesBasisUrl: string = "https://spyemotions18.blob.core.windows.net/thumbs/";
  private imagesCollection: Array<any> = AppConsts.imagesCollection;
  private weightsCollection = AppConsts.weightsCollection;
  private chosenProfessions = [];
  private imagesUrls: Array<any> = [];
  private startImageIndex: number = 0;
  private currentImage: any = null;
  private timerId: any = null;

  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;

  constructor(private emotionsService: EmotionsService,
    private router: Router,
    private route: ActivatedRoute,
    private lsService: LsService
  ) {
  }

  ngOnInit() {
    this.imagesCollection.forEach((imagesBlock, idx) => {
      imagesBlock.images.forEach((image, index) => {
        const num = (idx + 1) + (index * 14);
        this.imagesUrls.push(
          {
            id: num,
            categoryId: imagesBlock.id,
            name: imagesBlock.name,
            image: this.imagesBasisUrl + imagesBlock.name + "/" + image
          }
        );
      });
    });
    this.imagesUrls.sort((imageUrl1, imagesUrl2) => {
      return imageUrl1.id - imagesUrl2.id;
    });
    this.currentImage = this.imagesUrls[this.startImageIndex];
    setTimeout(() => {
      this.triggerSnapshot();
    }, 600);
    this.timerId = setInterval(() => {
      this.nextImage();
    }, 1200);
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage, currentImage: any): void {
    this.webcamImage = webcamImage;
    const body = {
      imageBase64: ''
    };
    body.imageBase64 = webcamImage.imageAsBase64;
    this.emotionsService.setImage(body).subscribe(result => {
      if (result[0]) {
        const categoryId = currentImage.categoryId;
        const weight = this.countEquation(result[0].scores);
        const weightObjInCategory = this.weightsCollection[categoryId - 1];
        weightObjInCategory.viewed++ ;
        weightObjInCategory.weight = (weightObjInCategory.weight + weight) / weightObjInCategory.viewed;
        this.weightsCollection[categoryId - 1] = weightObjInCategory;
      }
    });
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public countEquation(scores) {
    if (scores) {
      const s = scores;
      const result = s.anger + s.contempt + s.disgust + s.fear + s.sadness;
      return result;
    } else {
      return 0;
    }
  }

  private nextImage() {
    if (this.startImageIndex === 55) {
      clearInterval(this.timerId);
      this.weightsCollection.sort((weight1, weight2) => {
        return weight2.weight - weight1.weight;
      });
      this.router.navigate(['advised']);
      this.chosenProfessions.push(this.weightsCollection[0]);
      this.chosenProfessions.push(this.weightsCollection[1]);
      this.lsService.setProfessionsRating(this.chosenProfessions);
    } else {
      this.startImageIndex++;
      this.currentImage = this.imagesUrls[this.startImageIndex];
      setTimeout(() => {
        this.triggerSnapshot();
      }, 600);
    }
  }
}

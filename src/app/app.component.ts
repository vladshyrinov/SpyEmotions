import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { WebcamImage } from './modules/webcam/domain/webcam-image';
import { Observable } from 'rxjs/Observable';
import { EmotionsService } from './services/emotions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private trigger: Subject<void> = new Subject<void>();
  public webcamImage: WebcamImage = null;

  constructor(private emotionsService: EmotionsService) {
    // this.emotionsService.getEmotions().toPromise().then( result => {
    //   console.log(result);
    // });

    // this.emotionsService.setImage(body).subscribe( result => {
    //   console.log(result);
    // });
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    const body = {
      imageBase64: ''
    };
    body.imageBase64 = webcamImage.imageAsBase64;
    this.emotionsService.setImage(body).subscribe(result => {
      console.log(result[0]);
    });
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}

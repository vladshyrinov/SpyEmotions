import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { WebcamInitError } from '../domain/webcam-init-error';
import { WebcamImage } from '../domain/webcam-image';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.css']
})

export class WebcamComponent implements AfterViewInit, OnDestroy {

  @Input() public width: number = 640;
  @Input() public height: number = 480;

  private _trigger: Observable<void>;
  private triggerSubscription: Subscription;

  @Output() public imageCapture: EventEmitter<WebcamImage> = new EventEmitter<WebcamImage>();
  @Output() public initError: EventEmitter<WebcamInitError> = new EventEmitter<WebcamInitError>();
  @Output() public imageClick: EventEmitter<void> = new EventEmitter<void>();

  @ViewChild('video') private video: any;
  @ViewChild('canvas') private canvas: any;

  constructor() { }

  public ngAfterViewInit(): void {
    this.initWebcam();
  }

  public ngOnDestroy(): void {
    this.unsubscribeFromSubscriptions();
  }

  @Input()
  public set trigger(trigger: Observable<void>) {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    }
    this._trigger = trigger;

    // Subscribe on events from this Observable to take snapshots
    this.triggerSubscription = this._trigger.subscribe(() => {
      this.takeSnapshot();
    });
  }

  public takeSnapshot(): void {
    // set canvas size to actual video size
    const _video = this.video.nativeElement;
    const dimensions = { width: this.width, height: this.height };
    if (_video.videoWidth) {
      dimensions.width = _video.videoWidth;
      dimensions.height = _video.videoHeight;
    }

    const _canvas = this.canvas.nativeElement;
    _canvas.width = dimensions.width;
    _canvas.height = dimensions.height;

    // paint snapshot image to canvas
    _canvas.getContext('2d').drawImage(this.video.nativeElement, 0, 0);

    // read canvas content as image
    const mimeType: string = 'image/jpeg';
    const dataUrl: string = _canvas.toDataURL(mimeType);

    this.imageCapture.next(new WebcamImage(dataUrl, mimeType));
  }

  private initWebcam() {
    const _video = this.video.nativeElement;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
        .then(stream => {
          _video.srcObject = stream;
          _video.play();
        })
        .catch((err: MediaStreamError) => {
          this.initError.next(<WebcamInitError>{ message: err.message, mediaStreamError: err });
          console.warn('Error initializing webcam', err);
        });
    } else {
      this.initError.next(<WebcamInitError>{ message: 'Cannot read UserMedia from MediaDevices.' });
    }
  }

  private unsubscribeFromSubscriptions() {
    if (this.triggerSubscription) {
      this.triggerSubscription.unsubscribe();
    }
  }

}


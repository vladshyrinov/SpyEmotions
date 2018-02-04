import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebcamModule } from './modules/webcam/webcam.module';
import { HttpClientModule } from '@angular/common/http';
import { EmotionsService } from './services/emotions.service';
import { ImageViewerComponent } from './components/image-viewer/image-viewer.component';
import { LsService } from './services/ls.service';
import { ImageProfessionComponent } from './components/image-viewer/image-profession/image-profession.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageViewerComponent,
    ImageProfessionComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [
    EmotionsService,
    LsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

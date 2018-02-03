import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebcamModule } from './modules/webcam/webcam.module';
import { HttpClientModule } from '@angular/common/http';
import { EmotionsService } from './services/emotions.service';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [EmotionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

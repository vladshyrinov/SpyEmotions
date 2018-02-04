import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WebcamModule } from './modules/webcam/webcam.module';
import { HttpClientModule } from '@angular/common/http';
import { EmotionsService } from './services/emotions.service';
import { AdvisedProfListComponent } from './components/advised-prof-list/advised-prof-list.component';
import { AdvisedProfComponent } from './components/advised-prof-list/advised-prof/advised-prof.component';

@NgModule({
  declarations: [
    AppComponent,
    AdvisedProfListComponent,
    AdvisedProfComponent
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

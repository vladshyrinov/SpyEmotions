import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WebcamModule } from './modules/webcam/webcam.module';
import { HttpClientModule } from '@angular/common/http';
import { EmotionsService } from './services/emotions.service';
import { AdvisedProfListComponent } from './components/advised-prof-list/advised-prof-list.component';
import { AdvisedProfComponent } from './components/advised-prof-list/advised-prof/advised-prof.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/loader/loader.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'advised', component: AdvisedProfListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdvisedProfListComponent,
    AdvisedProfComponent,
    HomeComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [EmotionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

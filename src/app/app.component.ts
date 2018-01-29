import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  greetings = '';

  constructor(private appService: AppService) {
    this.appService.sayHello().subscribe( result => {
      this.greetings = result + ' and plus';
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-image-profession',
  templateUrl: './image-profession.component.html',
  styleUrls: ['./image-profession.component.css']
})
export class ImageProfessionComponent implements OnInit {

  @Input() currentImage = null;

  constructor() { }

  ngOnInit() {
  }

}

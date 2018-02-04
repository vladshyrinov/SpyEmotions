import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../../profession';
@Component({
  selector: 'app-advised-prof-list',
  templateUrl: './advised-prof-list.component.html',
  styleUrls: ['./advised-prof-list.component.css']
})
export class AdvisedProfListComponent implements OnInit {
  professions: Profession[] = [
    // tslint:disable-next-line:max-line-length
    { id: 1, name: "Business", img: "../../../assets/image/business.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 2, name: "Creative", img: "../../../assets/image/creative.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 3, name: "Culinary", img: "../../../assets/image/cooker.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 4, name: "Engineering", img: "../../../assets/image/engineer.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 5, name: "Fashion", img: "../../../assets/image/fashion.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 6, name: "IT", img: "../../../assets/image/it.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 7, name: "Media", img: "../../../assets/image/media.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 8, name: "Medicine", img: "../../../assets/image/doctor.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 9, name: "Military", img: "../../../assets/image/military.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 10, name: "Pedagogy", img: "../../../assets/image/teacher.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
     // tslint:disable-next-line:max-line-length
     { id: 11, name: "Politic", img: "../../../assets/image/politic.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 12, name: "Service", img: "../../../assets/image/service.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 13, name: "Sport", img: "../../../assets/image/sport.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 14, name: "Transport", img: "../../../assets/image/transport.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] }

  ];
  constructor() { }

  ngOnInit() {
  }

}

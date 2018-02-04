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
    { id: 1, name: "Military", img: "../../../assets/image/military.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 2, name: "Doctor", img: "../../../assets/image/doctor.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 3, name: "Business", img: "../../../assets/image/business.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 4, name: "Teacher", img: "../../../assets/image/teacher.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 5, name: "Service", img: "../../../assets/image/service.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 6, name: "Engineer", img: "../../../assets/image/engineer.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 7, name: "Cooker", img: "../../../assets/image/cooker.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 8, name: "IT", img: "../../../assets/image/it.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 9, name: "Creative", img: "../../../assets/image/creative.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 10, name: "Fashion", img: "../../../assets/image/fashion.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 11, name: "Media", img: "../../../assets/image/media.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 12, name: "Politic", img: "../../../assets/image/politic.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 13, name: "Transport", img: "../../../assets/image/transport.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] },
    // tslint:disable-next-line:max-line-length
    { id: 14, name: "Sport", img: "../../../assets/image/sport.jpg", description: "Some text some text some text", links: ["link1", "link2", "link3"] }


  ];
  constructor() { }

  ngOnInit() {
  }

}

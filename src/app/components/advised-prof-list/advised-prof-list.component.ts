import { Component, OnInit, Input } from '@angular/core';
import { Profession } from '../../profession';
import { LsService } from '../../services/ls.service';
@Component({
  selector: 'app-advised-prof-list',
  templateUrl: './advised-prof-list.component.html',
  styleUrls: ['./advised-prof-list.component.css']
})
export class AdvisedProfListComponent implements OnInit {
  professions: Profession[] = [
    // tslint:disable-next-line:max-line-length
    { id: 1, name: "Military", img: "../../../assets/image/military.jpg", links: ["https://www.ted.com/talks/peter_van_uhm_why_i_chose_a_gun", "https://www.ted.com/talks/keith_nolan_deaf_in_the_military", "https://www.ted.com/topics/war"] },
    // tslint:disable-next-line:max-line-length
    { id: 2, name: "Doctor", img: "../../../assets/image/doctor.jpg", links: ["https://www.edx.org/course/approaching-iatrology", "https://www.coursera.org/courses?languages=en&query=medicine+%26+healthcare", "https://www.ted.com/topics/medicine"] },
    // tslint:disable-next-line:max-line-length
    { id: 3, name: "Business", img: "../../../assets/image/business.jpg", links: ["https://www.coursera.org/courses?languages=en&query=business", "https://prometheus.org.ua/entrepreneurship/", "https://www.edx.org/course?search_query=business"] },
    // tslint:disable-next-line:max-line-length
    { id: 4, name: "Teacher", img: "../../../assets/image/teacher.jpg", links: ["https://www.coursera.org/courses?languages=en&query=pedagogy", "https://www.edx.org/course/?search_query=pedagog&subject=Education%20%26%20Teacher%20Training", "https://www.ted.com/search?q=teaching"] },
    // tslint:disable-next-line:max-line-length
    { id: 5, name: "Service", img: "../../../assets/image/service.jpg", links: ["https://www.edx.org/course/culture-services-new-perspective-kyotoux-002x-2", "https://www.ted.com/talks/siddhartha_roy_science_in_service_to_the_public_good", "https://www.coursera.org/courses?languages=en&query=service"] },
    // tslint:disable-next-line:max-line-length
    { id: 6, name: "Engineer", img: "../../../assets/image/engineer.jpg", links: ["https://www.edx.org/course?search_query=engineering", "https://www.ted.com/search?q=engineering", "https://www.coursera.org/courses?query=engineering"] },
    // tslint:disable-next-line:max-line-length
    { id: 7, name: "Cooker", img: "../../../assets/image/cooker.jpg", links: ["https://www.ted.com/search?q=culinary", "https://www.coursera.org/courses?languages=en&query=cook", "https://www.edx.org/course?search_query=cook"] },
    // tslint:disable-next-line:max-line-length
    { id: 8, name: "IT", img: "../../../assets/image/it.jpg", links: ["https://www.codecademy.com/", "https://www.edx.org/course?search_query=code", "https://courses.prometheus.org.ua/courses/Prometheus/CS50/2016_T1/about"] },
    // tslint:disable-next-line:max-line-length
    { id: 9, name: "Creative", img: "../../../assets/image/creative.jpg", links: ["https://www.ted.com/topics/creativity", "https://www.coursera.org/courses?languages=en&query=creativity", "https://www.edx.org/course/?search_query=creativity&subject=Art%20%26%20Culture"] },
    // tslint:disable-next-line:max-line-length
    { id: 10, name: "Fashion", img: "../../../assets/image/fashion.jpg", links: ["https://www.ted.com/search?q=fashion", "https://www.academiccourses.com/Courses/Fashion/", "https://www.vogue.com/fashion"] },
    // tslint:disable-next-line:max-line-length
    { id: 11, name: "Media", img: "../../../assets/image/media.jpg",  links: ["https://www.edx.org/course?search_query=media", "https://edx.prometheus.org.ua/courses/KNU/103/2015_T2/about", "https://www.coursera.org/courses?languages=en&query=media"] },
    // tslint:disable-next-line:max-line-length
    { id: 12, name: "Politic", img: "../../../assets/image/politic.jpg",  links: ["https://www.edx.org/course/?search_query=policy&subject=Law", "https://www.ted.com/search?q=policy", "https://courses.prometheus.org.ua/courses/Prometheus/GOV101/2015_T2/about"] },
    // tslint:disable-next-line:max-line-length
    { id: 13, name: "Transport", img: "../../../assets/image/transport.jpg", links: ["https://www.ted.com/search?q=transportation", "https://www.edx.org/course?search_query=transport", "https://www.coursera.org/courses?languages=en&query=transportationlink3"] },
    // tslint:disable-next-line:max-line-length
    { id: 14, name: "Sport", img: "../../../assets/image/sport.jpg", links: ["https://www.ted.com/search?q=sport", "https://www.coursera.org/courses?languages=en&query=sport", "https://www.edx.org/course/body-matters-why-exercise-makes-you-mcgillx-body101x-00"] }
  ];
  chosenProfessions: Array<any> = [];
  chosenProfessionsWithLinks: Array<any> = [];
  constructor(private lsService: LsService) { }

  ngOnInit() {
    this.chosenProfessions = this.lsService.getProfessionsRating();
    this.chosenProfessions.forEach((chosenProfession) => {
      this.professions.forEach((profession) => {
        if (chosenProfession.id === profession.id) {
          this.chosenProfessionsWithLinks.push(profession);
        }
      });
    });
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-advised-prof',
  templateUrl: './advised-prof.component.html',
  styleUrls: ['./advised-prof.component.css']
})
export class AdvisedProfComponent implements OnInit {
  @Input() photoProf: string;
  @Input() nameProf: string;
  @Input() descrProf: string;
  @Input() link1Prof: string;
  @Input() link2Prof: string;
  @Input() link3Prof: string;
  
  constructor() { }

  ngOnInit() {
  }

}

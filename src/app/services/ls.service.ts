import { Injectable } from '@angular/core';

@Injectable()
export class LsService {

  constructor() { }

  public getProfessionsRating() {
    let professionsRating = localStorage.getItem("professionsRating");
    if (professionsRating) {
      professionsRating = JSON.parse(professionsRating);
      return professionsRating;
    }
    return undefined;
  }

  public setProfessionsRating(professionsRating) {
    if (professionsRating) {
      professionsRating = JSON.stringify(professionsRating);
      localStorage.setItem("professionsRating", professionsRating);
    }
  }
}

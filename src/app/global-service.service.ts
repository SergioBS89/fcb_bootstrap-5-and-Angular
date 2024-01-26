import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  constructor() { }

  /**
   * This function allows to position the scroll depending if there is any frangment in the route
   * @param route 
   */
  scrollingTo(route: ActivatedRoute) {
    route.fragment.subscribe(fragment => {
      if (fragment) {
        const element = document.getElementById(fragment);
        if (element) {
          element.scrollIntoView();
        }
      }
      else {
        window.scrollTo(0, 0);
      }
    });
  }
}


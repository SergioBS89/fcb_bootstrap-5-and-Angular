import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  constructor(private route: ActivatedRoute, private service : GlobalServiceService) { }

  ngOnInit(): void {

    this.service.scrollingTo(this.route);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../global-service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: GlobalServiceService) { }

  ngOnInit(): void {
    this.service.scrollingTo(this.route);

  }
}



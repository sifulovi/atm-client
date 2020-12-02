import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tourList: any = [];
  description: any = '';

  constructor(private service: CommonService) { }

  ngOnInit(): void {
    this.tourList = this.service.populateTourList();
  }


}

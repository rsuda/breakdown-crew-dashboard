import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakdown-home',
  templateUrl: './breakdown-home.component.html',
  styleUrls: ['./breakdown-home.component.scss']
})
export class BreakdownHomeComponent implements OnInit {



  constructor() {
    this.show = true;
   }

  show: boolean;
  selected = 'month';
  hideAnnouncements(){
    this.show = false;
  }

  ngOnInit(): void {
  }

}

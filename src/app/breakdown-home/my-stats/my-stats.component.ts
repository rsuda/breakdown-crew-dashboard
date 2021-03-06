import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-stats',
  templateUrl: './my-stats.component.html',
  styleUrls: ['./my-stats.component.scss']
})
export class MyStatsComponent implements OnInit {

  show: boolean;
  selected = 'month';

  constructor() {
    this.show = false;
   }

  hideAnnouncements(){
    this.show = false;
  }

  ngOnInit(): void {
  }
}

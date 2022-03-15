import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-sidnav',
  templateUrl: './component-sidnav.component.html',
  styleUrls: ['./component-sidnav.component.scss']
})
export class ComponentSidnavComponent implements OnInit {
  isDarkTheme: boolean = true;

  constructor() { }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
  }

}

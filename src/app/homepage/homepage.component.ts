import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        top: 0,
        height: '20vw',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        top: -300,
        height: '10vw',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('.4s')
      ]),
      transition('closed => open', [
        animate('.4s')
      ]),
    ]),
  ]
})
export class HomepageComponent implements OnInit {
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isToggle: boolean = false;
  windowWidth: number = window.innerWidth;

  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.isToggle = !this.isToggle;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.windowWidth = event.target.innerWidth;
  }
}

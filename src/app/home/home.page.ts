import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public slides = [
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg',
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg',
    '../../assets/imgs/types-of-fuit-hero-e1559313183734.jpg'
  ]

  constructor() { }

  ngOnInit() {
  }

}

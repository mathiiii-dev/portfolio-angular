import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    anime({
      targets: '.anime-home',
      translateX: [-250, 0],
      easing: 'spring(1, 80, 10, 0)'
    });
    anime({
      targets: '.anime-home-img',
      translateX: [250, 0],
      easing: 'spring(1, 80, 10, 0)'
    });
  }


}

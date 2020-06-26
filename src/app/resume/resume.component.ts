import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import {query} from '@angular/animations';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

    anime({
      targets: '.90',
      width: '100%', // -> from '28px' to '100%',
      easing: 'spring(1, 80, 10, 0)'
    });

    anime({
      targets: '.75',
      width: '75%', // -> from '28px' to '100%',
      easing: 'spring(1, 80, 10, 0)'
    });

    anime({
      targets: '.30',
      width: '30%', // -> from '28px' to '100%',
      easing: 'spring(1, 80, 10, 0)'
    });

    anime({
      targets: '.25',
      width: '25%', // -> from '28px' to '100%',
      easing: 'spring(1, 80, 10, 0)'
    });
  }
}

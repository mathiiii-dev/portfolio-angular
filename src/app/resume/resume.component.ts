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
      targets: '.tbon',
      width: '95%', // -> from '28px' to '100%',
      easing: 'spring(1, 50, 10, 0)'
    });

    anime({
      targets: '.bon',
      width: '75%', // -> from '28px' to '100%',
      easing: 'spring(1, 50, 10, 0)'
    });

    anime({
      targets: '.bof',
      width: '30%', // -> from '28px' to '100%',
      easing: 'spring(1, 50, 10, 0)'
    });

    anime({
      targets: '.tbof',
      width: '25%', // -> from '28px' to '100%',
      easing: 'spring(1, 50, 10, 0)'
    });

    anime({
      targets: '.moy',
      width: '45%', // -> from '28px' to '100%',
      easing: 'spring(1, 50, 10, 0)'
    });
  }
}

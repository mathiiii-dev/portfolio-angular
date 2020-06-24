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

    var play1 = document.querySelector('.play-1');

    var animation1 = anime({
      targets: '.anime-cv-1',
      translateX: ['-1000em',0],
      autoplay: false,
      easing: 'spring(1, 80, 10, 0)'
    });

    play1.addEventListener('click', function() {
    animation1.play();
    });

    var play2 = document.querySelector('.play-2');

    var animation2 = anime({
      targets: '.anime-cv-2',
      translateX: ['-1000em', 0],
      autoplay: false,
      easing: 'spring(1, 80, 10, 0)'
    });

    play2.addEventListener('click', function() {
      animation2.play();
    });

  }
}

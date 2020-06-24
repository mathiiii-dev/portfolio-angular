import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var textWrapper = document.querySelector('.ml2');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: false})
        .add({
          targets: '.ml2 .letter',
          scale: [4,1],
          opacity: [0,1],
          translateZ: 0,
          easing: "easeOutExpo",
          delay: (el, i) => 70*i
        }).add({
      targets: '.ml2',
      easing: "easeOutExpo",
      delay: 1000
    });
      anime({
          targets: ['.home-icon'],
          rotate: -360,
          duration: 800,
          loop: false,
          easing: 'cubicBezier(.5, .05, .1, .3)'
      });
  }

}

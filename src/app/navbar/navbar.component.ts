import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {
    anime({
      targets: '.anime-nav',
      translateY: [-250, 0],
      easing: 'spring(1, 80, 10, 0)'
    });
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

}


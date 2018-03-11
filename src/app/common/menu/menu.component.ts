import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './menu.responsive.component.css'],
})
export class MenuComponent implements AfterViewInit {
  @ViewChild('navigation') nav;
  @ViewChild('navList') navList;
  @ViewChild('navSublist') navSublist;
  @ViewChild('homeIcon') homeIcon;
  @ViewChild('homeLink') homeLink;

  ngAfterViewInit() {
    this.nav = document.querySelector('nav');
    this.navList = document.querySelector('.nav-list');
    this.navSublist = document.querySelector('.nav-sublist');
    this.homeIcon = document.querySelector('.home-icon');
    this.homeLink = document.getElementById('home-link');
  }

  toggleMenu(): void {
    this.nav.classList.toggle('nav-stretch');
    this.navList.classList.toggle('switch-mobile');

    // On menu close, nav sub-list should close too.
    this.navSublist.classList.remove('show-sublist');

    // On menu close, should switch back rotating icon.
    this.homeIcon.classList.remove('mobile-icon-rotate');

    // On menu close, should remove background from home link.
    this.homeLink.classList.remove('mobile-link-hovered');
  }

  toggleSubMenu(): void {
    this.homeLink.classList.toggle('mobile-link-hovered');
    this.navSublist.classList.toggle('show-sublist');
    this.homeIcon.classList.toggle('mobile-icon-rotate');
  }

  closeMenu(): void {
    this.nav.classList.remove('nav-stretch');
    this.navList.classList.remove('switch-mobile');

    this.navSublist.classList.remove('show-sublist');
    this.homeIcon.classList.remove('mobile-icon-rotate');

    // When changing routes, should go to top of page.
    scroll(0, 0);
  }
}
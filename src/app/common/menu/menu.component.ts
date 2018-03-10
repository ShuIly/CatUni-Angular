import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './menu.responsive.component.css'],
})
export class MenuComponent {
  toggleMenu(): void {
    document.querySelector('nav').classList.toggle('nav-stretch');
    document.querySelector('.nav-list').classList.toggle('switch-mobile');

    // On menu close, nav sub-list should close too.
    document.querySelector('.nav-sublist').classList.remove('show-sublist');

    // On menu close, should remove black background from home link.
    document.getElementById('home-link').classList.remove('mobile-link-hovered');

    // On menu close, should switch back rotating icon.
    document.querySelector('.home-icon').classList.remove('mobile-icon-rotate');
  }

  toggleSubMenu(): void {
    document.getElementById('home-link').classList.toggle('mobile-link-hovered');
    document.querySelector('.nav-sublist').classList.toggle('show-sublist');
    document.querySelector('.home-icon').classList.toggle('mobile-icon-rotate');
  }
}
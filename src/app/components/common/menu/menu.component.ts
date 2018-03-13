import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css', './menu-responsive.component.css'],
})
export class MenuComponent {
  @ViewChild('navigation')
  private nav: ElementRef;

  @ViewChild('navList') 
  private navList: ElementRef;

  @ViewChild('navSublist')
  private navSublist: ElementRef;

  @ViewChild('homeIcon') 
  private homeIcon: ElementRef;

  @ViewChild('homeLink') 
  private homeLink: ElementRef;

  toggleMenu(): void {
    this.nav.nativeElement.classList.toggle('nav-stretch');
    this.navList.nativeElement.classList.toggle('switch-mobile');

    // On menu close, nav sub-list should close too.
    this.navSublist.nativeElement.classList.remove('show-sublist');

    // On menu close, should switch back rotating icon.
    this.homeIcon.nativeElement.classList.remove('mobile-icon-rotate');

    // On menu close, should remove background from home link.
    this.homeLink.nativeElement.classList.remove('mobile-link-hovered');
  }

  toggleSubMenu(): void {
    this.homeLink.nativeElement.classList.toggle('mobile-link-hovered');
    this.navSublist.nativeElement.classList.toggle('show-sublist');
    this.homeIcon.nativeElement.classList.toggle('mobile-icon-rotate');
  }

  closeMenu(): void {
    this.nav.nativeElement.classList.remove('nav-stretch');
    this.navList.nativeElement.classList.remove('switch-mobile');

    this.navSublist.nativeElement.classList.remove('show-sublist');
    this.homeIcon.nativeElement.classList.remove('mobile-icon-rotate');

    // After changing routes and closing menu, should go to top of page.
    scroll(0, 0);
  }
}
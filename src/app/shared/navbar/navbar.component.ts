import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  links = [
    {
      name: 'home',
      path: '/home',
    },
    {
      name: 'news',
      path: '#',
    },
    {
      name: 'politics',
      path: '/politics',
    },
    {
      name: 'world',
      path: '#',
    },
    {
      name: 'sports',
      path: '#',
    },
    {
      name: 'tech',
      path: '/tech',
    },
    {
      name: 'entertainment',
      path: '#',
    },
    {
      name: 'music',
      path: '#',
    },
    {
      name: 'lifestyle',
      path: '#',
    },
  ];

  isMobileNav: boolean = false;
  isHidden: boolean = false;

  constructor() {}

  calcStyle() {
    return {
      hidden: this.isMobileNav,
    };
  }

  trackByFn(index: number, item: any) {
    return item.id;
  }

  ngOnInit(): void {}
}

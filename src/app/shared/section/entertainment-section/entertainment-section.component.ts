import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entertainment-section',
  templateUrl: './entertainment-section.component.html',
  styleUrls: ['./entertainment-section.component.scss'],
})
export class EntertainmentSectionComponent implements OnInit {
  headerOne = 'Music';
  headerTwo = 'entertainment';
  headerThree = 'lifestyle';
  dataOne: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/patoranking.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/patoranking.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/patoranking.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/patoranking.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
  ];

  dataTwo: {
    imageURL: string;
    title: string;
    author: string;
    date: string;
    body: string;
  }[] = [
    {
      imageURL: '../../../assets/cardi-b.png',
      title: 'Cardi B cries out over her $200k budget on Covid 19 test in 2021',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The Covid 19 pandemic has changed the world in profound ways and life might never be the same - even with the promise of an ...',
    },
    {
      imageURL: '../../../assets/cardi-b.png',
      title: 'Cardi B cries out over her $200k budget on Covid 19 test in 2021',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The Covid 19 pandemic has changed the world in profound ways and life might never be the same - even with the promise of an ...',
    },
    {
      imageURL: '../../../assets/cardi-b.png',
      title: 'Cardi B cries out over her $200k budget on Covid 19 test in 2021',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The Covid 19 pandemic has changed the world in profound ways and life might never be the same - even with the promise of an ...',
    },
    {
      imageURL: '../../../assets/cardi-b.png',
      title: 'Cardi B cries out over her $200k budget on Covid 19 test in 2021',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The Covid 19 pandemic has changed the world in profound ways and life might never be the same - even with the promise of an ...',
    },
  ];

  dataThree: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/kotoka.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/kotoka.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/kotoka.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/kotoka.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

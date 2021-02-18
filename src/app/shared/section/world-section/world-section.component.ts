import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world-section',
  templateUrl: './world-section.component.html',
  styleUrls: ['./world-section.component.scss'],
})
export class WorldSectionComponent implements OnInit {
  headerOne = 'tech';
  headerTwo = 'world';
  headerThree = 'travel';
  dataOne: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/tiktok.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/tiktok.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/tiktok.png',
      title: 'Tiktok faces EU privacy review from EU privacy watchdogs',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/tiktok.png',
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
      imageURL: '../../../assets/trump.png',
      title: 'US corona cases have "passed" the peak: Trump',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The president has been at loggerheads with state governors about the timing of easing restrictions and reopening businesses',
    },
    {
      imageURL: '../../../assets/trump.png',
      title: 'US corona cases have "passed" the peak: Trump',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The president has been at loggerheads with state governors about the timing of easing restrictions and reopening businesses',
    },
    {
      imageURL: '../../../assets/trump.png',
      title: 'US corona cases have "passed" the peak: Trump',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The president has been at loggerheads with state governors about the timing of easing restrictions and reopening businesses',
    },
    {
      imageURL: '../../../assets/trump.png',
      title: 'US corona cases have "passed" the peak: Trump',
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        'The president has been at loggerheads with state governors about the timing of easing restrictions and reopening businesses',
    },
  ];

  dataThree: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/who.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/who.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/who.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/who.png',
      title: 'Malaria kills 100 in south sudan - WHO',
      date: 'February 04 2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

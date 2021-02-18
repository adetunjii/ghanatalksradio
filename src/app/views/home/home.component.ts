import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  headerOne = 'health';
  headerTwo = 'politics';
  headerThree = 'sport';
  dataOne: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/path1.png',
      title: 'Screening centers to be setup in volta region - Minister',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/path1.png',
      title: 'Screening centers to be setup in volta region - Minister',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/path1.png',
      title: 'Screening centers to be setup in volta region - Minister',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/path1.png',
      title: 'Screening centers to be setup in volta region - Minister',
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
      imageURL: '../../../assets/gyamfi.png',
      title:
        "How can NDC collate 'credible' results from error-filled pink sheets - Sammy Gyamfi wonders",
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        "  Mr Gyamfi argued that the request for the NDC's own result is not \
      justified because the NDC is in the court to challenge the \
      declaration by the Electoral Commission",
    },
    {
      imageURL: '../../../assets/gyamfi.png',
      title:
        "How can NDC collate 'credible' results from error-filled pink sheets - Sammy Gyamfi wonders",
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        "  Mr Gyamfi argued that the request for the NDC's own result is not \
      justified because the NDC is in the court to challenge the \
      declaration by the Electoral Commission",
    },
    {
      imageURL: '../../../assets/gyamfi.png',
      title:
        "How can NDC collate 'credible' results from error-filled pink sheets - Sammy Gyamfi wonders",
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        "  Mr Gyamfi argued that the request for the NDC's own result is not \
      justified because the NDC is in the court to challenge the \
      declaration by the Electoral Commission",
    },
    {
      imageURL: '../../../assets/gyamfi.png',
      title:
        "How can NDC collate 'credible' results from error-filled pink sheets - Sammy Gyamfi wonders",
      author: 'John Emerald',
      date: 'February 04 2021',
      body:
        "  Mr Gyamfi argued that the request for the NDC's own result is not \
      justified because the NDC is in the court to challenge the \
      declaration by the Electoral Commission",
    },
  ];

  dataThree: { imageURL: string; title: string; date: string }[] = [
    {
      imageURL: '../../../assets/afcon.png',
      title: 'Afcon: Nigeria, Tunisia battle for third place',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/afcon.png',
      title: 'Afcon: Nigeria, Tunisia battle for third place',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/afcon.png',
      title: 'Afcon: Nigeria, Tunisia battle for third place',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/afcon.png',
      title: 'Afcon: Nigeria, Tunisia battle for third place',
      date: 'February 04 2021',
    },
    {
      imageURL: '../../../assets/afcon.png',
      title: 'Afcon: Nigeria, Tunisia battle for third place',
      date: 'February 04 2021',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

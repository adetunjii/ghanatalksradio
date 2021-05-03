import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-header',
  templateUrl: './news-header.component.html',
  styleUrls: ['./news-header.component.scss'],
})
export class NewsHeaderComponent implements OnInit {
  @Input() header!: string;

  constructor() {}

  ngOnInit(): void {}
}

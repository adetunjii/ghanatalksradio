import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.scss'],
})
export class PoliticsComponent implements OnInit {
  title: string = 'Politics';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
  @Input('headerOne') headerOne!: string | null;
  @Input('headerTwo') headerTwo!: string | null;
  @Input('headerThree') headerThree!: string | null;
  @Input('dataOne') dataOne!:
    | { imageURL: string; title: string; date: string }[]
    | null;
  @Input('dataTwo') dataTwo!:
    | {
        imageURL: string;
        title: string;
        author: string;
        body: string;
        date: string;
      }[]
    | null;
  @Input('dataThree') dataThree!:
    | { imageURL: string; title: string; date: string }[]
    | null;

  constructor() {}

  trackByFn(index: number, item: any) {
    return item.id;
  }

  ngOnInit(): void {}
}

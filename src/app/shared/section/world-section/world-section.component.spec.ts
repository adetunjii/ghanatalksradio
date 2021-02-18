import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldSectionComponent } from './world-section.component';

describe('WorldSectionComponent', () => {
  let component: WorldSectionComponent;
  let fixture: ComponentFixture<WorldSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

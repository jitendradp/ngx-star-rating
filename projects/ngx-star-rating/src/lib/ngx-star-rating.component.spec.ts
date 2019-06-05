import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStarRatingComponent } from './ngx-star-rating.component';

describe('NgxStarRatingComponent', () => {
  let component: NgxStarRatingComponent;
  let fixture: ComponentFixture<NgxStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

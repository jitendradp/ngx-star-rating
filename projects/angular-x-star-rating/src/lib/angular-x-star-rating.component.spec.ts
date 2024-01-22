import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularXStarRatingComponent } from './angular-x-star-rating.component';

describe('AngularXStarRatingComponent', () => {
  let component: AngularXStarRatingComponent;
  let fixture: ComponentFixture<AngularXStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AngularXStarRatingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularXStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

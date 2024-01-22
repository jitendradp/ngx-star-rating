import { TestBed } from '@angular/core/testing';

import { AngularXStarRatingService } from './angular-x-star-rating.service';

describe('AngularXStarRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularXStarRatingService = TestBed.get(AngularXStarRatingService);
    expect(service).toBeTruthy();
  });
});

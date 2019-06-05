import { TestBed } from '@angular/core/testing';

import { NgxStarRatingService } from './ngx-star-rating.service';

describe('NgxStarRatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStarRatingService = TestBed.get(NgxStarRatingService);
    expect(service).toBeTruthy();
  });
});

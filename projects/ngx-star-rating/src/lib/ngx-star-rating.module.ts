import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { NgxStarRatingComponent } from './ngx-star-rating.component';

@NgModule({
  declarations: [NgxStarRatingComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxStarRatingComponent]
})
export class NgxStarRatingModule { }

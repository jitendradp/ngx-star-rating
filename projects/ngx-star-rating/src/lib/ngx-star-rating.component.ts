import { Component, OnInit, Input, forwardRef, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'ngx-star-rating',
  templateUrl: 'ngx-star-rating.component.html',
  styleUrls: ['ngx-star-rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxStarRatingComponent),
      multi: true,
    }
  ]
})
export class NgxStarRatingComponent implements OnInit, ControlValueAccessor {
  onChange;
  value;
  stars = [5, 4, 3, 2, 1];

  @Input() id: string;
  @Input() disabled: boolean;
  @ViewChildren('ngxCheckbox') ngxCheckbox: QueryList<ElementRef>;

  constructor() {
    if (!this.disabled) {
      this.disabled = false;
    }
  }

  ngOnInit() { }

  rate(rate) {
    if (!this.disabled) {
      this.propagateChange(rate);
    }
  }

  writeValue(value) {
    if (this.ngxCheckbox && value === null) {
      this.ngxCheckbox.forEach((checkbox: ElementRef) => {
        checkbox.nativeElement.checked = false;
      });
    }
    this.value = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) { }

  private propagateChange = (_: any) => { };
}

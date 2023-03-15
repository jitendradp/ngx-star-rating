import { Component } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  rating3: number;
  public form: UntypedFormGroup;

  constructor(private fb: UntypedFormBuilder){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating1: ['', Validators.required],
      rating2: [4]
    });
  }

}



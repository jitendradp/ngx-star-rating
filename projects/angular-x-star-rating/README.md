# angular-x-star-rating

<p align="center">
  <h1 align="center">Angular Star Rating (ngx star rating)</h1>
</p>

Simple Angular rating control from angular2 application using fontawesome icon.

[Demo can be found here](https://stackblitz.com/edit/angular-x-star-rating)

![angular-x-star-rating angular rating](https://github.com/viananicolas/angular-x-star-rating/raw/master/resources/angular-x-star-rating-sample.png)

## Installation

1. Install npm module:

   `npm install angular-x-star-rating --save`

2. Include fontawesome css:
   `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">`

## Usage

Import `AngularXStarRatingModule` module in your app, and use a component in your html:

      import { AngularXStarRatingModule } from 'angular-x-star-rating';

      // Include tag into your component
      <angular-x-star-rating [formControl]="rating" [id]="'rating'" [disabled]="true"></angular-x-star-rating>

- `<angular-x-star-rating>`:
  - `[(ngModel)] | formControl = ngModel or formControl
  - '[id] = Unique id for each control
  - `[disabled]="true|false"` = Enable/Disable star rating. Default is false.

## Sample

```typescript
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularXStarRatingModule } from 'angular-x-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularXStarRatingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// app.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  public form: FormGroup;

  constructor(private fb: FormBuilder){
    this.rating3 = 0;
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
}

// app.component.html
<form [formGroup]="form">
    <angular-x-star-rating formControlName="rating" [id]="'rating'"></angular-x-star-rating>
    <div>Rating: {{form.value.rating}}</div>
    <p>form is valid: {{ form.valid ? 'true' : 'false' }}</p>
</form>
```

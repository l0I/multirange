import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { AngularMyDatePickerModule } from "angular-mydatepicker";

@NgModule({
  declarations: [
    AppComponent,
    DateComponent
  ],
  imports: [
    BrowserModule,
    AngularMyDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

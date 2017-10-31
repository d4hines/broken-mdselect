import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { FlexLayoutModule, } from '@angular/flex-layout';
import { environment } from '../environments/environment';
import {
  MatInputModule, MatCheckboxModule,

  MatSelectModule,

} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
  ], // directives, components, and pipes owned by this NgModule
  imports: [
    // SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

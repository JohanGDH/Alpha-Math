import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Error404RoutingModule } from './error-404-routing.module';
import { Error404Component } from './components/error404/error404.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    Error404Component
  ],
  imports: [
    CommonModule,
    Error404RoutingModule,
    MaterialModule
  ]
})
export class Error404Module { }

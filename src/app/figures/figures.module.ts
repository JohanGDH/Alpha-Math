import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';

import { CuadradeComponent } from './components/cuadrade/cuadrade.component';
import { FiguresRoutingModule } from './figures-routing.module';


@NgModule({
  declarations: [
    CuadradeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FiguresRoutingModule
  ]
})
export class FiguresModule { }

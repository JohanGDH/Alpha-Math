import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { CuadradeComponent } from './components/cuadrade/cuadrade.component';


@NgModule({
  declarations: [
    CuadradeComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class FiguresModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Circle } from './services/circle.service';
import { Triangle } from './services/triangle.service';
import { Cuadrilatero } from './services/cuadrade.service';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Triangle,
    Cuadrilatero,
    Circle
  ],

})
export class CoreModule { }

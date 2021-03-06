import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';

import { CuadradeComponent } from './components/cuadrade/cuadrade.component';
import { FiguresRoutingModule } from './figures-routing.module';
import { CircleComponent } from './components/circle/circle.component';
import { TriangleComponent } from './components/triangle/triangle.component';
import { FigureContainerComponent } from './components/figure-container/figure-container.component';


@NgModule({
  declarations: [
    CuadradeComponent,
    CircleComponent,
    TriangleComponent,
    FigureContainerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FiguresRoutingModule,
    SharedModule
  ]
})
export class FiguresModule { }

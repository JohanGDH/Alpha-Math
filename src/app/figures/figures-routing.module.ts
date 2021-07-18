import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './components/circle/circle.component';
import { CuadradeComponent } from './components/cuadrade/cuadrade.component';
import { TriangleComponent } from './components/triangle/triangle.component';

const routes: Routes = [
  {
    path: 'cuadrade', 
    component: CuadradeComponent,
  },
  {
    path: 'circle', 
    component: CircleComponent,
  },
  {
    path: 'triangle',
    component: TriangleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
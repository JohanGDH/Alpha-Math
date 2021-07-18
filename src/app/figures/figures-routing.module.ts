import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleComponent } from './components/circle/circle.component';
import { CuadradeComponent } from './components/cuadrade/cuadrade.component';

const routes: Routes = [
  {
    path: 'cuadrado', 
    component: CuadradeComponent,
  },
  {
    path: 'circle', 
    component: CircleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
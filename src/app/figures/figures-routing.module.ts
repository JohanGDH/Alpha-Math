import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadradeComponent } from './components/cuadrade/cuadrade.component';

const routes: Routes = [
  {
    path: '', 
    component: CuadradeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
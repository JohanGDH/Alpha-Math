import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FigureContainerComponent } from './components/figure-container/figure-container.component';
const routes: Routes = [
  {
    path: '', 
    component: FigureContainerComponent ,
  },  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiguresRoutingModule { }
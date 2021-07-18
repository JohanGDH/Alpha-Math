import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadradeComponent } from './components/cuadrade/cuadrade.component';

const appRoutes: Routes = [
  {
    path: 'cuadrado', component: CuadradeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
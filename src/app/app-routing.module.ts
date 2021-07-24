import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';



const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',

      },
      {
        path: 'home',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule),
      },
      {
        path: 'figures',
        loadChildren:() => import('./figures/figures.module').then(m => m.FiguresModule),
      }
    ],
  },
  {
    path:'**',
    loadChildren: () => import('./error-404/error-404.module').then(m => m.Error404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeRoutingModule } from './home-routing.module';

import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    FooterComponent
  ]
})
export class HomeModule { }

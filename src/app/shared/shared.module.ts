import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { KatexModule } from 'ng-katex';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    KatexModule,
    ReactiveFormsModule
  ],
  exports: [
    KatexModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }

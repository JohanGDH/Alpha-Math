
import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Cuadrilatero } from 'src/app/core/services/cuadrade.service';

@Component({
  selector: 'app-cuadrade',
  templateUrl: './cuadrade.component.html',
  styleUrls: ['./cuadrade.component.css'],
  
})
export class CuadradeComponent implements OnInit {

  cuadrado: Cuadrilatero;
  form: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm();
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      base: [, [Validators.min(0), Validators.required]],
      altura: [, [Validators.min(0)]],
    })
  }

  ngOnInit(): void {
    console.log("CuadradeComponent")
  }

  save($event:any) {
    if(this.form.valid) {
      this.cuadrado = new Cuadrilatero(this.baseField.value, this.alturaField.value)
      console.log(this.cuadrado.calcAr())
    }
  }

  get baseField() {
    return this.form.get('base')
  }

  get alturaField() {
    return this.form.get('altura')
  }
}

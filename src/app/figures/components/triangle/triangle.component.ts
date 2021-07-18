import { Component, OnInit } from '@angular/core';
import { Triangle } from 'src/app/core/services/triangle.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  form: FormGroup;
  triangle: Triangle;

  constructor(
    private formBuilder: FormBuilder,
  ) { 
    this.buildForm()
  }

  ngOnInit(): void {
  }

  save($event:any) {
    if(this.form.valid) {
      this.triangle = new Triangle(this.baseField.value, this.lado1Field.value, this.lado2Field.value, this.alturaField.value)
   
      console.log(this.triangle.calcAr())
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      base: [, [ Validators.required, Validators.min(0)]],
      lado1: [, [Validators.required, Validators.min(0)]],
      lado2: [, [Validators.min(0)]],
      altura: [, [Validators.min(0)]],
    })
  }

  get baseField() {
    return this.form.get('base')
  }

  get lado1Field() {
    return this.form.get('lado1')
  }

  get lado2Field() {
    return this.form.get('lado2')
  }

  get alturaField() {
    return this.form.get('altura')
  }


}

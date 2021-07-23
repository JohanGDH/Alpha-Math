import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Triangle } from 'src/app/core/services/triangle.service';
import { IsPosibleService } from 'src/app/core/services/is-posible.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent implements OnInit {

  form: FormGroup;
  triangle: Triangle;
  h: number;
  isPosible: boolean;
  equationAr: string;
  equationPr: string;
  equationAlt: string;
  constructor(
    private formBuilder: FormBuilder,
    private isPosibleService: IsPosibleService,
    private matSnackBar: MatSnackBar,
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
  }

  save($event:any) {
    this.isPosible = this.isPosibleService.isPosible(this.baseField.value, this.lado1Field.value, this.lado2Field.value);
    if(this.form.valid && this.isPosible) {
      this.triangle = new Triangle(this.baseField.value, this.lado1Field.value, this.lado2Field.value, this.alturaField.value);
  
      this.h = this.triangle.calcAlt()

      if(this.h = this.alturaField.value && this.alturaField.value) {
        this.isHeigthCorrect(this.triangle.calcAlt(), this.alturaField.value)
      }
        
      this.equationAlt = ` h = √a^2(b^2/4)
      |//| h = √${this.triangle.lado1**2}-(${this.triangle.lado1**2}/4)
      |//| h = √${this.triangle.lado1**2}- ${(this.triangle.lado1**2)/4}
      |//| h = √${(this.triangle.lado1**2) - (this.triangle.lado1**2)/4}
      |//| h = ${this.triangle.calcAlt()}
      `
      

      if(!this.triangle.esEscaleno) {
        console.log('no esEscaleno')
        this.equationAr =`A = (b*h)/2
        |//| A = (${this.triangle.base}*${this.triangle.calcAlt()})/2
        |//| A = ${this.triangle.base*this.triangle.calcAlt()}/2
        |//| A = ${this.triangle.calcAr()} 
        ` 
       ;
      } 
      if (this.triangle.esEscaleno) {
        console.log(' esEscaleno')
        this.equationAr = `A = √s_p(s_p – a)(s_p – b)(s_p – c)
        |//| A = √${this.triangle.calcPr()/2}(${this.triangle.calcPr()/2} - ${this.triangle.base})(${this.triangle.calcPr()/2} - ${this.triangle.lado1})(${this.triangle.calcPr()/2}- ${this.triangle.lado2})
        |//| A = √${this.triangle.calcPr()/2}(${(this.triangle.calcPr()/2 )- this.triangle.base})(${(this.triangle.calcPr()/2) - this.triangle.lado1})(${(this.triangle.calcPr()/2) - this.triangle.lado2})
        |//| A = √${(this.triangle.calcPr()/2)* ((this.triangle.calcPr()/2)- this.triangle.base)* ((this.triangle.calcPr()/2) - this.triangle.lado1) * ((this.triangle.calcPr()/2) - this.triangle.lado2)}  
        |/| A = ${this.triangle.calcAr()}
        `;
      }      
      this.equationPr =
      `
       P = A+B+C
       |P = ${this.triangle.base} + ${this.triangle.lado1} + ${this.triangle.lado2}
       |P =${this.triangle.base + this.triangle.lado1 + this.triangle.lado2}`;
       
    } else {
      this.alertIsPosible(this.isPosible)
      this.form.reset();

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

  private alertIsPosible(conditional: boolean) {
    if(!conditional) {
      this.matSnackBar.open('No puede existir un triangulo con esos datos', "OK", {
        duration: 3000,
      });
    }
  }

  private isHeigthCorrect(a:number, b: number) {
    if(a != b) {
      this.matSnackBar.open(`La altura introducida ( ${b} ) no es la correcta`, "OK", {
        duration: 3000
      })
    }
  }

}

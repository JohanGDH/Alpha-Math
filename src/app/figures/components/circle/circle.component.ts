import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Circle } from '../../../core/services/circle.service'

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

  circle: Circle;
  form: FormGroup

  constructor(
    private formBuilder: FormBuilder
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  save($event:any) {
    if(this.form.valid) {
      this.circle = new Circle(this.radioField.value)
      console.log(this.circle.calcAr())
    }
  }
  private buildForm() {
    this.form = this.formBuilder.group({
      radio: [,[Validators.min(0)]],
    })
  }

  get radioField() {
    return this.form.get('radio')
  }

}

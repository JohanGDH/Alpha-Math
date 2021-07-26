import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  form: FormGroup;
  key: number = 0;

  constructor(
   private formBuilder: FormBuilder,
   private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.buildForm()
  }
  
  private buildForm() {
    this.form = this.formBuilder.group({
      name: [,[Validators.required,Validators.minLength(3), Validators.maxLength(15), Validators.pattern(/^[a-z ,.'-]+$/i)]],
      email: [, [Validators.required, Validators.email]],
      message: [, [Validators.required, Validators.minLength(10), Validators.maxLength(256)]]
    })
  }

  save($event:any) {
    if(this.form.valid) {           
      this.snackBar.open('Mensaje Enviado', 'Aceptar', {
        duration: 4000
      })
    }
  }

  get nameField() {
    return this.form.get('name');
  }
  
  get emailField() {
    return this.form.get('email');
  }

  get messageField() {
    return this.form.get('message');
  }

}

import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { Cuadrilatero } from 'src/app/core/services/cuadrade.service';

@Component({
  selector: 'app-cuadrade',
  templateUrl: './cuadrade.component.html',
  styleUrls: ['./cuadrade.component.css'],
  
})
export class CuadradeComponent implements OnInit {
  
  Cuadrado:Cuadrilatero;
  
  constructor(
  ) {

    this.Cuadrado = new Cuadrilatero(0)



  }

  ngOnInit(): void {
  }

  getForm(f:Form) {

  }

}

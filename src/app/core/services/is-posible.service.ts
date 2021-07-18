import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IsPosibleService {

  constructor() { }

  isPosible(base:number, lado1:number, lado2?:number) {
    
    if(!lado2) {
      lado2 = lado1
    }    

    if (base < lado1 + lado2 && lado1 < base + lado2 && lado2 < base + lado1 ) {
      return true    
    } else {
      alert("No puede existir un triángulo con esos lados")
      return false
    }
  }
}

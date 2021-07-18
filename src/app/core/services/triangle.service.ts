import { TriangleInterface } from "../models/triangle.model";
export class Triangle implements TriangleInterface {

    esIsosceles = false;

    constructor(public base:number, public lado1:number, public lado2?:number, public altura?:number) {
        this.base = base;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.altura = altura;

        if (this.lado1 == this.lado2 || this.base == this.lado1) {
            this.esIsosceles = true
            this.lado2 = this.lado1;
        }
    };

    calcAlt() {
        if(this.esIsosceles) {
            let h = Math.sqrt((this.lado1**2) - ((this.base**2)/4));
            this.altura = h
            return h;
        } else  {
            return undefined
        }
    }

    calcPr() {        
        if(this.base && this.lado1 && this.lado2) {
            return this.base + this.lado1 + this.lado2;
        } else {
            return 'Uno de los datos no es válido';
        }
    };

    calcAr() {
        this.altura = this.calcAlt()
        if(this.altura) {
            return (this.base * this.altura)/2;
        }
        return 'Falta  el dato "altura"';
    }
}
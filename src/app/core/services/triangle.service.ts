import { TriangleInterface } from "../models/triangle.model";
export class Triangle implements TriangleInterface {

    esEscaleno = false;
    esIsosceles = false;
    sp: number;

    constructor(public base:number, public lado1:number, public lado2?:number, public altura?:number) {
        this.base = base;
        this.lado1 = lado1;
        this.lado2 = lado2;
        this.altura = altura;
        this.sp = this.calcPr()/2

        if(!this.lado2) {
            this.lado2 = this.lado1;
        }

        if (this.lado1 == this.lado2 || this.base == this.lado1) {
            this.esIsosceles = true;
            this.lado2 = this.lado1;
        }
        if (this.base != this.lado1 && this.base != this.lado2 && this.lado1 != this.lado2) {
            this.esEscaleno = true;
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
        }
        return undefined 
    }

    calcAr() {
        this.altura = this.calcAlt()
        if(this.altura) {
            return (this.base * this.altura)/2;
        } 
        return Math.sqrt((this.sp/2)*(this.sp - this.base)*(this.sp - this.lado1)*(this.sp - this.lado2));
    }
}
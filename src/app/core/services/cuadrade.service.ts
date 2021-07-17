import { CuadradeInterface } from '../models/cuadrade.model'
export class Cuadrilatero implements CuadradeInterface{
    
    constructor(public base:number , public altura?:number) {
        this.base = base;
        this.altura = altura;
    }

    calcAr() {
        if(this.altura || this.base == this.altura) {
            return this.base * this.altura;
        }
        else {
            return this.base**2;
        }
    };

    calcPr() {
        if(!this.altura) {
            return this.base*4
        } else {
            return (this.base*2) + (this.altura*2)
        }
        
    }
};

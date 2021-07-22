import { CircleInterface } from "../models/circle.model";
export class Circle implements CircleInterface{
    pi: number;

    constructor(public radio?:number, public  diametro?:number) {
        this.pi = 3.14;
        this.radio = radio;
        this.diametro = diametro;

        if(this.radio) {
            this.diametro = this.radio*2
        } else if(this.diametro) {
            this.radio = this.diametro/2
        }

    }

    calcAr() {
        if(this.radio) {
            return (this.radio **2) * this.pi;
        } else {
            return 'Esto no debería pasar XD';
        }
    }

    calcPr() {
        if(this.radio) {
            return this.radio*this.pi
        } else {
            return 'Esto no debería pasar XDD';
        }
            
    }
}

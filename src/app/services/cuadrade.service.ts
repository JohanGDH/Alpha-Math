

export class Cuadrilatero {
    base: number;
    altura?: number;

    constructor(b:number , h:number) {
        this.base = b;
        this.altura = h;
    }

    calcPrAndAr(figure: Cuadrilatero) {
        if(this.altura) {
            return this.base * this.altura;
        }
        else {
            return this.base**2;
        }
    };
};

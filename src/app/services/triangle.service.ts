export class Triangle {
    base: number;
    altura?: number;
    lado1: number;
    lado2?: number;
    esIsosceles: boolean;

    constructor(b:number, l1:number, l2?:number, h?:number) {
        this.base = b;
        this.lado1 = l1;
        this.lado2 = l2;
        this.altura = h;
        this.esIsosceles = false;

        if (this.lado1 == this.lado2) {
            this.esIsosceles = true
            this.lado1 = this.lado2;
        }
    };

    calcAlt(figure: Triangle) {
        if(this.esIsosceles) {
            return Math.sqrt((this.lado1**2) - ((this.base**2)/4));
        } else {
            return 'El triángulo no es isósceles';
        }
    }

    calcPr(figure: Triangle) {        
        if(this.base && this.lado1 && this.lado2) {
            return this.base + this.lado1 + this.lado2;
        } else {
            return 'Uno de los datos no es válido';
        }
    };

    calcAr(figure: Triangle) {
        if(this.altura) {
            return (this.base * this.altura)/2;
        }
        return 'Falta un el dato "altura"';
    }

}
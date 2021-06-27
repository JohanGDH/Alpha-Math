class Circle {

    radio?: number;
    diametro?: number;
    pi: number;

    constructor(r?:number, d?:number) {
        this.pi = Math.PI;
        this.radio = r;
        this.diametro = d;

        if(this.radio) {
            this.diametro = this.radio*2
        } else if(this.diametro) {
            this.radio = this.diametro/2
        }

    }

    calcAr(figure: Circle) {
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
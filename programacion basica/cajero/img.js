class bi
{
    constructor(v,c){
        this.imagen = new Image();
        this.valor = v;
        this.cantidad = c;
        this.imagen.src = imagen[this.valor];
    }
}

var imagen = [];

imagen["50000"] = "50.jpg";
imagen["20000"] = "20.jpg";
imagen["10000"] = "10.png";
imagen["5000"] = "5.png";
imagen["2000"] = "2.jpg";
imagen["1000"] = "1.jpg";

caja.push(new bi(50000,5));
caja.push(new bi(20000,3));
caja.push(new bi(10000,3));
caja.push(new bi(5000,3));
caja.push(new bi(2000,3));
caja.push(new bi(1000,3));
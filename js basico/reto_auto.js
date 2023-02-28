var i;

function auto(MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var lista = [];

for(i = 0; i < 30; i++){
    var Marca = prompt("Ingrese la marca de su auto: ");
    var Modelo = prompt("Ingrese el modelo: ");
    var Annio = prompt("Ingrese el año de su auto: ");
    lista.push(new (Marca, Modelo, Annio));
}

for(i=0; i < lista.length; i++){
    console.log(lista[i]);
}
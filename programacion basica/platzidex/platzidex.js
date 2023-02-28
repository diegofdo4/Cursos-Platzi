var imagen = [];  //array asociativo es un objeto literal 
imagen["vakachu"] = "vaca.png";
imagen["porizart"] = "pollo.png";
imagen["tocino"] = "cerdo.png";

var coleccion = []; //array numerico
coleccion.push(new pakiman("vakachu", 100, 90));
coleccion.push(new pakiman("porizart", 100, 120));
coleccion.push(new pakiman("tocino", 200, 150));

for(p of coleccion){ //obtenemos los elementos
    p.mostrar();
}
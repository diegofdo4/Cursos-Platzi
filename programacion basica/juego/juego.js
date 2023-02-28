//alert('hola')
//

    //document.write(x +', ');
//}
document.addEventListener("keydown", dibujarTeclado);
var vp = document.getElementById('game');
var papel = vp.getContext('2d');
var cantidad = aleatorio(1,5);
var A = 150;
var B = 150;
var move = 64;
var xVaca = new Array();
var yVaca = new Array();
var xPollo = new Array();
var yPollo = new Array();
var i;


var teclas = {   //objeto para capturar las teclas wasd
	UP:87,
	DOWN:83,
	LEFT:65,
	RIGHT:68
};

var fondo = {
    url:  "tile.png",
    cargaOk: false
};

var vaca = {
    url: "vaca.png",
    cargaOk: false
};

var pollo = {
    url: "pollo.png",
    cargaOk: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOk: false
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener('load', cargarMapa);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener('load', cargarVaca);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load",cargarPollo);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load",cargarCerdo);


//function posicion(x,y){
    
    
//}
function cargarMapa(){
    fondo.cargaOk = true;
    dibujar();
}

function cargarVaca(){
    vaca.cargaOk = true;
    posicion();
}

function cargarPollo(){
    pollo.cargaOk=true;
   posicion();
}

function cargarCerdo(){
    cerdo.cargaOk = true;
   dibujar();
}

function posicion(){
    if(vaca.cargaOk){
        for( i = 0; i<5; i++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0,5);
            xVaca[i] = x*80;
            yVaca[i] = y*80;
        }
    }
    if(pollo.cargaOk){
        for(i = 0; i<cantidad; i++){
            var x = aleatorio(0, 5);
            var y = aleatorio(0,5);
            xPollo[i] = x*80;
            yPollo[i] = y*80;
    }
}
dibujar();
}
function dibujar(){    
    if(fondo.cargaOk){
        papel.drawImage(fondo.objeto, 0, 0);
    }
    if(pollo.cargaOk){
       
    }
    //console.log(x,y);
    if(vaca.cargaOk){
        for(i = 0; i<cantidad;i++){
            papel.drawImage(vaca.objeto, xVaca[i], yVaca[i]);
        }
    }
       
    
    if(pollo.cargaOk){
        for(i = 0; i<cantidad;i++){
            papel.drawImage(pollo.objeto,xPollo[i],yPollo[i]);
        }
    }
    
    if(cerdo.cargaOk){
        papel.drawImage(cerdo.objeto,A,B);
    }
}
function aleatorio(min, max){
    var resultado;
    resultado = Math.floor(Math.random()*(max - min + 1)) + min;
    return resultado;
}
function dibujarTeclado(evento) {
	// body...
	switch(evento.keyCode){
		
		case teclas.UP:
		    B = B- move;
            dibujar(A,B);
		break;

		case teclas.DOWN:
			B = B + move;
            dibujar(A,B);
		break;

		case teclas.LEFT:
			A = A - move;
            dibujar(A,B);
		break;

		case teclas.RIGHT:
			A = A + move;
            dibujar(A,B);
		break;
		default:
			console.log("mames que presionaste??");

	}
}


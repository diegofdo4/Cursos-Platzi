document.addEventListener('mousedown',dibujarMouse);
document.addEventListener('mousemove',dibujarMove);
document.addEventListener('mouseup',levantarMouse);
let color1 = document.getElementById('color');



var state = 0;
var cuadro = document.getElementById('dibujos');
var papel = cuadro.getContext("2d");
var x; 
var y;
 



function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final,lienzo) 
{
	// body...
	lienzo.beginPath();				//iniciar dibujo invoco una funcion
	lienzo.strokeStyle = color;		// atrivuto-propiedad del objeto lienzo
	lienzo.lineWidth = 3;
	lienzo.moveTo(x_inicial, y_inicial);		// posicion inicial
	lienzo.lineTo(x_final,y_final);			// posicion a la cual voy a llegar
	lienzo.stroke();				// trasamos la raya
	//lienzo.closepath();			// terminar dibujos

}



function dibujarMouse(evento){

	state = 1;
	

}

function dibujarMove(evento) {
	// body...
	var clor = color1.value;
	if(state == 1){
		dibujarLinea(clor,x,y,evento.layerX,evento.layerY,papel);
		x = evento.layerX;
		y = evento.layerY;
	}
	
	else{
		
		x = evento.layerX;
		y = evento.layerY;
	}
//console.log(evento);
}

function levantarMouse(evento){
	state = 0;
}
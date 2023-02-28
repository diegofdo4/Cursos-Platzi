document.addEventListener("keyup", dibujarTeclado);
var cuadro = document.getElementById("dibujos");
var papel = cuadro.getContext("2d");
var x = 150;
var y = 150;

dibujarLinea("green", x-1,y-1,x+1,y+1,papel);

var teclas = {   //objeto para capturar las teclas wasd
	UP:87,
	DOWN:83,
	LEFT:65,
	RIGHT:68
};
console.log(teclas);

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

function dibujarTeclado(evento) {
	// body...
	var color_ = "green";
	var move = 10;
	switch(evento.keyCode){
		
		case teclas.UP:
			
			dibujarLinea(color_,x,y,x,y - move,papel);
			y = y - move;
		break;

		case teclas.DOWN:
			dibujarLinea(color_,x,y,x,y + move,papel);
			y = y + move;

		break;

		case teclas.LEFT:
			dibujarLinea(color_,x,y,x - move,y,papel);
			x = x - move;
		break;

		case teclas.RIGHT:
			dibujarLinea(color_,x,y,x + move,y,papel);
			x = x + move;
		break;
		default:
			console.log("mames que presionaste??");

	}
	/*if(evento.keyCode == teclas.UP){
		console.log("que lo q hay?");
	}
	if(evento.keyCode == teclas.DOWN){
		console.log("verga ps q pregunte?");
	}
	if(evento.keyCode == teclas.LEFT){
		console.log("ahhh no mames");
	}
	if(evento.keyCode == teclas.RIGHT){
		console.log("tu madre por si acaso");
	}*/
}
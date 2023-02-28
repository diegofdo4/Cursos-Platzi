//alert('this is magic');
//console.log(lienzo);

var d = document.getElementById('dibujo');   //obtener elemento de html mediante la direccion
var ancho = d.width;
var lienzo = d.getContext('2d'); 			//funcion del objeto canvas que permite obtener el area en la cual se va a dibujar
var text = document.getElementById('text_lineas');
var boton = document.getElementById('button');
boton.addEventListener('click', drawForClick); // no llamamos la funcion con parentecis pq no queremos que se ejecute en la linea 3, si no que se ejecute cuando detecte un click					// añadir un escuchador de evento


function dibujarLinea(color, x_inicial, y_inicial, x_final, y_final) 
{
	// body...
	lienzo.beginPath();				//iniciar dibujo invoco una funcion
	lienzo.strokeStyle = color;		// atrivuto-propiedad del objeto lienzo
	lienzo.moveTo(x_inicial, y_inicial);		// posicion inicial
	lienzo.lineTo(x_final,y_final);			// posicion a la cual voy a llegar
	lienzo.stroke();				// trasamos la raya
	//lienzo.closepath();			// terminar dibujos

}

function drawForClick(){
	console.log(text);
	//var x = parseInt(text.value);

	var lineas = parseInt(text.value);
	var space = ancho / lineas;
	var i = 0;
	var L = 1;
	var L_ = 300;
	var C = 'green';


	while(i < lineas){
		dibujarLinea(C, 0,L,L,300);    //llamamos la funcion y le enviamos los parametros
		dibujarLinea(C, L,0,300,L); 
		dibujarLinea(C, L,300,300,L_); 
		dibujarLinea(C, 0,L_,L,0); 
		i++;
		L += space;
		L_ -= space;
	} 
	dibujarLinea(color,1,1,1,space-1);
	//alert("don't touch me " + x);
}
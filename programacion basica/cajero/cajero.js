var billete = document.getElementById("extraer"); // extramos el boton del html por el id que lo identifica
billete.addEventListener("click", entregarDinero); //detectamos la accion que se ejecuta en el boton extraido en la linea anterior 
var resultado = document.getElementById("resultado");

var dinero = 0;
var div = 0; // resultado de la divición 
var papeles = 0;
var caja = []; // creamos un array numerico para enviarle los valores de los billetes a la clase bi
var entrega = []; // este array va a contener los billetes que entregamos al usuario



function entregarDinero(){
    var t = document.getElementById("dinero"); //parseInt convierte una cadena de texto a entero;
    dinero = t.value; 
    for(var di of caja){
        if(dinero>0){
            div = Math.floor(dinero/di.valor); // Math.floor nos permite realizar la division hacia abajo
            //console.log(div);
            if(div > di.cantidad){
                papeles = di.cantidad
            }
            else{
                papeles = div
            }
            di.cantidad -= papeles;
            for(var i = 0; i < papeles; i++){
                entrega.push(new bi(di.valor, 1));
            }
            
            dinero -= (di.valor*papeles);
        }
        //div = dinero/caja[di];
    }
    if(dinero>0){
  
        //document.write("no tengo el suficiente dinero :'c")  es muy util cuando empezamos el aprendizaje de desarrollo web, pero es una muy mala practica 
        resultado.innerHTML = " ";
        resultado.innerHTML = "No tengo el suficiente dinero :'c"
         
    }
    else{
        for(var e of entrega){
            if(e.cantidad>0){
                //resultado.innerHTML +=  e.cantidad + " billetes de $" + e.valor + "<br/>";
                //resultado.innerHTML = " ";
               while(e.cantidad>0){
                    
                    resultado.innerHTML += "<img src =" + e.imagen.src + ">" + "<br />";
                    entrega = [];
                    e.cantidad -= 1;
                    
                }
                
            }
        }
    }
    
}




const express = require("express");//require es una obcion que no existe por defecto en los navegadores more info in: notion/platzi/programacion basica
const app = express() // por la forma en la que esta construida express no es una clase, por lo cual la invocamos como una funcion
//js creando una clase especial de funcion donde meto todo los poderes de express en app
app.get("/", inicio);//es como addEventListener solo que en vez de click o load ponemos la url
app.get("/cursos", cursos);

function inicio(peticion, resultado){
    resultado.send("this is home")
}

function cursos(peticion,resultado){
    resultado.send("our courses");
}

app.listen(8989);
class pakiman{  // la clase es la definicion de un oobjeto
    constructor(name, life, attack){ //esta funcion nos ayuda a construir la clase
        this.imagen = new Image();
        this.name = name;
        this.type = "tierra";
        this.life = life;
        this.attack = attack;

        this.imagen.src = imagen[this.name];
    }
    mostrar(){
        document.write("<p>");
        document.body.appendChild(this.imagen); // funcion agregar un hijo al arbol para poder visualizar la imagen
        document.write("<strong>" + this.name + "</strong><br>");
        document.write("life: " + this.life + "<br>" );
        document.write("attack: " + this.attack + "<hr>"); //hr crea una linea divisora
        document.write("</p>");
    }
}
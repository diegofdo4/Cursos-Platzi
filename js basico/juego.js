var op1 = piedra;
var op2 = papel;
var op3 = tijera;

function resultado(usuario, cpu){
    if (usuario == op1 || usuario == op2 || usuario == op3){
        if (usuario === op1 && cpu === op2){
            console.log("gana cpu");
        }else if (usuario === op2 && cpu === op3){
            console.log("gana cpu");
        }else if (usuario === op3 && cpu === op1){
            console.log("gana cpu");
        }else {
            console.log("gana jugador");
        }
    }
}
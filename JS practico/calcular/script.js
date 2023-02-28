const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResultado = document.querySelector('#result');

btn.addEventListener('submit', sumarValues);

function sumarValues(event) {
    console.log({event});
    event.preventDefault();    
    const suma = +input1.value + +input2.value;
    pResultado.innerText = "resultado: " + suma;
}
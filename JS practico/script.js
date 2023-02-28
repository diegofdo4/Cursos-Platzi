const h1 = document.querySelector('h1');
const p = document.querySelector('p');
//const parrafito = document.querySelector('.parrafito'); con querySelector podemos poner clases, id y demas com lo hariamos en css
const parrafito = document.getElementsByClassName('parrafito'); //con getElementsByClassName no necesitamos escribir la clase como lo hariamos en css
//const pid = document.querySelector('#pid');
const pid = document.getElementById('pid'); //con getElementById no necesitamos poner el id como lo hariamos en css
const input = document.querySelector('input');

console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'que lo que hay?';//el comando innerHTML nos permite cambiar el html desde el js
h1.innerText = 'que lo que hay?';//el comando innerText nos permite cambiar el texto de html desde el js

console.log(h1.getAttribute('pantalla'));
h1.setAttribute('pantalla', 'Samsung');

h1.classList.add('Hyundai','puta');
h1.classList.remove('puta'); //con esto removemos una clase
//h1.classList.toggle('hola');// esta nos permite reemplazar la clase
//h1.classList.contains('hello');// esta nos devuelve un true o false dependiendo si existe o no la clase

input.value = "123";

//tambien podemos crear elementos con js

const img = document.createElement('img');
img.setAttribute('scr','https://cdn.pixabay.com/photo/2017/10/17/16/10/fantasy-2861107_1280.jpg');

pid.append(img);
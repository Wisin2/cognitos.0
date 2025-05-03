/*
let primerNumero;
let segundoNumero;


function pedirDatos() {
    primerNumero = parseInt(prompt('Ingrese el primer número'));
    segundoNumero = parseInt(prompt('Ingrese el segundo número'));
}

function mostrarResultado() {
    let resultado = primerNumero + segundoNumero;
    alert('El resultado es: ' + resultado);
}

pedirDatos();
mostrarResultado();
*/

const botonCognitus = document.getElementById('botonMensaje')
const mostrartexto = document.getElementById('mostrarTexto')

function accionBoton() {
    mostrartexto.textContent = 'Ta locoooo'

}

botonCognitus.addEventListener('click' , accionBoton);
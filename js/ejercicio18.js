let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let suma = 0;
let i = 1;

do {
    suma += i; 
    i++; 
} while (i <= numero);

console.log("La suma de todos los números naturales hasta " + numero + " es " + suma);
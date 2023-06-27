let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let producto = 1;
let i = 1;

do {
    producto *= i; 
    i++;
} while (i <= numero);

console.log("El producto de todos los números enteros positivos hasta " + numero + " es " + producto);

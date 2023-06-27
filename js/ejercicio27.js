let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let suma = 0;

let i = 1;
while (i <= numero) {
    if (i % 2 !== 0) {
        suma += i;
    }
    i++;
}

console.log("La suma de los números impares es: " + suma);
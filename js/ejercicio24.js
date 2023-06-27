let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let suma = 0;

while (numero !== 0) {
    let digito = numero % 10;
    suma += digito;
    numero = Math.floor(numero / 10);
}

console.log("La suma de los dígitos es: " + suma);

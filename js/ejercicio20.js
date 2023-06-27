let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

if (numero % 2 !== 0) {
    numero -= 1;
}

while (numero >= 0) {
    console.log(numero);
    numero -= 2; 
}
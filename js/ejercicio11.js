let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

if (numero % 3 === 0) {
    console.log("El número es divisible entre 3");
} else {
    console.log("El número no es divisible entre 3");
}
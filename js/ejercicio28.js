let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let divisores = 0;

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
        divisores++;
    }
}

if (divisores === 2) {
    console.log("El número es primo");
} else {
    console.log("El número no es primo");
}
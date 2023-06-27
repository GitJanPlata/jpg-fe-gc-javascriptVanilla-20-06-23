let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

let sumaDivisores = 0;

let i = 1;
while (i < numero) {
    if (numero % i === 0) {
        sumaDivisores += i;
    }
    i++;
}

if (sumaDivisores === numero) {
    console.log("El número " + numero + " es un número perfecto");
} else {
    console.log("El número " + numero + " no es un número perfecto");
}
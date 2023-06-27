let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

for (let i = 1; i <= numero; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}

function esPrimo(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
let numero = prompt("Por favor, ingresa un número");

numero = parseInt(numero);

for (let i = 0; i <= numero; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
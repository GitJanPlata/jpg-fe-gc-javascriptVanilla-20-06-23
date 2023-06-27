let palabra = prompt("Por favor, ingresa una palabra");

let palabraInvertida = "";

let indice = palabra.length - 1;
while (indice >= 0) {
    palabraInvertida += palabra[indice];
    indice--;
}

console.log("Palabra invertida: " + palabraInvertida);
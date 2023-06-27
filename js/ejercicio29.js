let palabra = prompt("Por favor, ingresa una palabra");

palabra = palabra.toLowerCase();

let contadorVocales = 0;

for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
        contadorVocales++;
    }
}

console.log("La palabra tiene " + contadorVocales + " vocal(es).");
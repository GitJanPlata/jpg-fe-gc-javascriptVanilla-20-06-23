let dia = prompt("Por favor, ingresa el día de la semana (como número del 1 al 7)");

dia = parseInt(dia);

let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

if (dia >= 1 && dia <= 7) {
    console.log("El día de la semana es: " + dias[dia - 1]);
} else {
    console.log("Por favor, ingresa un número del 1 al 7");
}
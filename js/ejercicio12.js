let calificacion = prompt("Por favor, ingresa tu calificación");

calificacion = parseFloat(calificacion);

if (calificacion >= 70) {
    console.log("Has aprobado el examen");
} else {
    console.log("No has aprobado el examen");
}
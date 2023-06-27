let year = prompt("Por favor, ingresa un año");

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log("El año es bisiesto");
} else {
    console.log("El año no es bisiesto");
}
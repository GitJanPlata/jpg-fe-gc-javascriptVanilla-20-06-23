let mes = prompt("Por favor, ingresa un número del 1 al 12");

mes = parseInt(mes);

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

if (mes >= 1 && mes <= 12) {
    console.log("El mes es: " + meses[mes - 1]);
} else {
    console.log("Por favor, ingresa un número del 1 al 12");
}
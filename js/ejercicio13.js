let num1 = prompt("Por favor, ingresa el primer número");
let num2 = prompt("Por favor, ingresa el segundo número");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 === num2) {
    console.log("Los números son iguales");
} else {
    console.log("Los números son diferentes");
}
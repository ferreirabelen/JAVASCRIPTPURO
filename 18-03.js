const prompt = require("prompt-sync")({sigint:true});

// suma = (n1,n2) => n1 + n2;
// console.log(suma(4,2));

// dameCinco = () => [1,2,3,4,5]
// console.log(dameCinco())

// multiplicarPorDos = () => 123 * 2;
// console.log(multiplicarPorDos())

// mostrarNombre = () => "Mi nombre es hernán";
// console.log(mostrarNombre())

//ejercicio 1 
let frase = prompt("ingresa una frase: ");
console.log(frase + ":)");


//  //ejercicio 2
let nombre = prompt("Escriba su nombre: ");
console.log("Hola" + " " + nombre + "!");

// //ejercicio 3
let numero1 = parseInt(prompt("Ingresar un numero: "));
let numero2 = parseInt(prompt("Ingresar un segundo numero: "));
let suma = numero1 + numero2;
console.log("La suma de los dos numeros ingresados es: " + suma);

// //ejercicio 4
let anioNacimiento = parseInt(prompt("Ingresar el año que naciste: "));
let anioActual = 2022;
let edad = anioActual - anioNacimiento;
console.log("Tenes " + edad + " años de edad");

// //ejercicio6
for(i = 0; i <= 100; i+=2){
    console.log(i)
}
//otra forma de hacer el ejercicio 3  del 18-03
function pares(){
    for (i=0; i < 100; i++){
        pares = i%2;
        if(pares == 0){
            console.log(i)
        }
    }
}
pares()

// //ejercicio 7
const nombres = ["Pedro", "Pablo", "Maria", "Juan", "Diana"]; 
console.log(nombres[0])
console.log(nombres[1])
console.log(nombres[2])
console.log(nombres[3])
console.log(nombres[4])

// //ejercicio 8
// let numero = parseInt(prompt("ingresa un numero: "));
// function calcular(n){
//     if(n < 500){
//         console.log("el numero ingreado es menor que 500")
//     }
//     else{
//         calcular = 18 * n;
//         resultado = calcular / 100;
//         console.log(resultado)
//     }
// }
// calcular(numero);


// //ejercicio 9
function elemento(){
    let posicion = array[3];
    if(posicion == array[3]){
        console.log(posicion);
    }else{
        let ultimaPosicion = array[-1];
        console.log(ultimaPosicion);
    }
}
array = ["pablo", "maria", "jose"];
elemento(array);





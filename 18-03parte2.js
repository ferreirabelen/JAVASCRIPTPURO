const prompt = require("prompt-sync")({sigint:true});


//ejercicio 1
// let  primerNota = parseInt(prompt("Ingresar primera nota:"));
// let  segundaNota = parseInt(prompt("Ingresar segunda nota:"));
// let  tercerNota = parseInt(prompt("Ingresar tercer nota:"));
// function promedio(){
//     let promedio = (primerNota + segundaNota + tercerNota)/3;
//     return promedio;
// }
// let promedioFinal = promedio(primerNota,segundaNota,tercerNota)
// console.log("El promedio final es: " + promedioFinal)


// //jercicio2 ;
// let dolarBlue = 202.50;
// let dolarOficial = 115;
// let pesos = parseInt(prompt("Ingresar pesos argentinos: "));

// function pesosADolares(pesos,dolar){
//     let calcular = pesos/dolar;
//     let cambio = calcular;
//     console.log(cambio)

// }
// pesosADolares(pesos,dolarBlue);
// pesosADolares(pesos,dolarOficial);

// //ejercicio 3
// let salario = parseInt(prompt("Ingresar un numero: "));
// let descuento = (20 * salario ) / 100;
// salarioFinal = salario - descuento;
// console.log("Tu salario final es: " + salarioFinal);

// //ejercicio 4
// let nota1 = parseInt(prompt("Ingresar primera nota: "));
// let nota2 = parseInt(prompt("Ingresar segunda nota: "));
// let nota3 = parseInt(prompt("Ingresar tercera nota: "));
// function promedio(nota1, nota2, nota3){
//     let calcular = (nota1 + nota2 + nota3) / 3;
//     console.log(calcular);
//     if (calcular > 10.5){
//         console.log("Aprobado");
//     }else{
//         console.log("Desaprobado");
//     }
// }
// promedio(nota1, nota2, nota3);


// //ejercicio 5
// let numero = parseInt(prompt("Ingresar un numero: "))
// if (numero%2 == 0){
//     console.log("El numero que ingresaste es par")
// }else{
//     console.log("El numero que ingresaste es impar")
// }

// //ejercicio 6
// let usuario = prompt("Ingrese usuario: ");
// let clave = parseInt(prompt("Ingrese clave: "))
// function acceso(){
//     if (usuario == "ADMIN" && clave == "123456"){
//         console.log("ACCESO PERMITIDO");
//     }else {
//         console.log("ACCESO DENEGADO");
//     }
// }
// acceso(usuario,clave);


// //ejercicio 9
// for(let i=0; i <= 10; i++){
//     if( i%2 == 0){
//         console.log("tu numero es par " + i);
//     }else{
//         console.log("tu numero es impar " + i);
//     }
//     }

// //ejercicio 10
// let numeroIngresado = parseInt(prompt("Ingrese un numero: "))
// for(let i=0; i <= numeroIngresado; i++){
//     console.log(i)
// }


const myArray = [];
for(let i = 1; i < 10; i += 2){
myArray.push(i);
}
console.log(myArray)

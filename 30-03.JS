const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];


//sacra el min y max de edades 
let min = Math.min(...edades);
let max = Math.max(...edades)
console.log("el menor numero del array edaddes es: " + min);
console.log("El mayor numero del array edaddes es : " + max);

// function menor(array){
//     let menor18 = []
//     for (i=0;i < array.length;i++){
//         if(array[i] < 18){
//             menor18.push(array[i])
//         }
//     }
//     console.log("numero menores a 18")
//     return menor18
// }
// let menorA18 = menor(edades);
// console.log(menorA18)


// function mayor(array){
//     let mayorIgual = []
//     for (i=0;i < array.length;i++){
//         if(array[i] >= 18){
//             mayorIgual.push(array[i])
//         }
//     }
//     console.log("numeros iguales o mayores a 18")
//     return mayorIgual;
// }
// let mayorA18 = mayor(edades);
// console.log(mayorA18);


// function igual(array){
//     let igual18 = [];
//     for(i=0;i < array.length;i++){
//         if (array[i] == 18){
//             igual18.push(array[i]);
//         }
//     }
//     console.log("igual A 18")
//     return igual18
// }

// let igualA18 = igual(edades);
// console.log(igualA18)


//sacar promedio de edades 
// function promedio(array){
//     let suma = 0
//     for(i=0;i < array.length;i++){
//         suma = suma + array[i]
//     }
//     suma = suma / 10
//     console.log(suma)
// }

// promedio(edades)



//incrementar en 1 totas las edades 
// function sumar(array){
//     let incremento = []
//     for(i=0;i < array.length;i++){
//         let suma = array[i] + 1;
//         incremento.push(suma)
//     }
//     console.log(incremento)
// }
// sumar(edades)


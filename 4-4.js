//pasar un array y un indice, por ejemplo si paso el indice 1, debe devolver 6.
let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

function encontrar(array,n){
    for (let i = 0; i < array.length; i++) {  
        if (array[i] == array[n]){
            console.log(array[i])
        }
    }
}

encontrar(array,21)

//devuelve los dias que tiene el mes dependiendo el numero del mes que le pase 
function diasDelMes(numeroMes) {
    let mensaje;
    if(numeroMes == 1 || numeroMes == 3 || numeroMes == 5 || numeroMes == 7 || numeroMes == 8 || numeroMes ==10 || numeroMes == 12){
        mensaje = "Este mes tiene 31 dias"
    }
    else if (numeroMes == 2){
        mensaje = "Este mes tiene 28 dias"
    }
    else{
        mensaje = "Este mes tiene 30 dias"
    }
    return mensaje;
}
let mes = diasDelMes(12)
console.log(mes)



// Escribir una función de JavaScript que invierta un número. Por ejemplo,
// si x = 32443, la salida debería ser 34423.





// Escribir una función que reciba una array y solo imprima los valores que
// se repiten. Por ejemplo, dada la siguiente array e índice, la función
// imprimirá '6,23,33,100'. let array =
// [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

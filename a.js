
let array1 = [false,1,0,1,2,0,1,3,"a"];

function moverCeros (arr){
    let primerArreglo = [];
    let segundoArreglo = [];
    let arregloFinal = [];
    for( let i= 0 ; i < arr.length ; i++){
        if( arr[i] === 0){
            segundoArreglo.push(arr[i])
        }
    else {
        primerArreglo.push(arr[i]);
    }
    arregloFinal = primerArreglo.concat(segundoArreglo);
    }
    return arregloFinal
}

console.log(moverCeros(array1))
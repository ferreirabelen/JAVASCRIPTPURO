// let alumno = {
//     nombre : "agustin",
//     nroLegajo : 2222,
//     notas : [10, 9, 7]
// }

// function promedio(){
//     final = alumno.notas
//     suma = final[0] + final [1] + final[2];
//     resultado = suma / 3;
//     return resultado;
// }
// promediofinal = promedio(alumno);
// console.log(promediofinal);

let array1 = [
    { 
        nombre:"Lena",
        edad: 27
    },
    { 
        nombre:"Eze",
        edad: 49
    }
]

function propiedadUnica(arr, str) {
    let respuesta = [];
    for (let i = 0; i < arr.length; i++) {
    let obj = {
        [str]: arr[i][str],
    };
    respuesta.push(obj);
    }
    return respuesta;
}
let objetoCambiado = propiedadUnica(array1, "nombre");
console.log(objetoCambiado);
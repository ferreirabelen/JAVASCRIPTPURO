//mostrar del 5 al 20 salteando de tres en tres 
function tresEnTres(){
    for (i = 5; i < 20; i+=3){
        console.log(i)
    }
}
tresEnTres();


//imprimir la suma del 0 al 100 
function tuvieja(){
    let suma = 0
    for (let i = 0; i <= 100; i++) {
        suma = suma + i
    }
    console.log(suma)
}

tuvieja()

// Realizar una función que, dada una lista, devuelva una nueva lista cuyo
// contenido sea igual a la original pero invertida.

let lista = ["arroz", "tu vieja", "blue", "pollo"]

function listaAlReves(array){
        listaNueva = [];
        for (let i = 0; i < array.length; i++) {
            listaNueva.unshift(array[i])
        }
        console.log(listaNueva)
}
listaAlReves(lista)


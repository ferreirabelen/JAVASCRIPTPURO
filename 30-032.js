//arrays y clases
const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: "$3.253,40",
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: "$3.229,45",
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: "$1.360,19",
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: false,
saldo: "$3.627,12",
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: "$1.616,52",
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: "$1,408.68",
edadTitular: 25,
tipoCuenta: "corriente"
}
]

//menores que 30
function menoresde30(array){
    let nuevoarray = []
    for(i=0; i< array.length;i++){
        if( array[i].edadTitular < 30) 
            nuevoarray.push(array[i])
        }
        return nuevoarray;
    }

// let menores30 = menoresde30(arrayCuentas)
// console.log(menores30)

//mayores que 30

function mayoresde30(array){
    let nuevoarray = []
    for(i=0; i< array.length;i++){
        if( array[i].edadTitular >= 30) 
            nuevoarray.push(array[i])
        }
        return nuevoarray;
    }

// let mayores30 = mayoresde30(arrayCuentas)
// console.log(mayores30)

//exactamente 30 
function iguala30(array){
    let nuevoarray = []
    for(i=0; i< array.length;i++){
        if( array[i].edadTitular === 30) 
            nuevoarray.push(array[i])
        }
        return nuevoarray;
    }

// let igual = iguala30(arrayCuentas)
// console.log(igual)


//ordenarlos por tipo de cuenta
function tipoDeCuenta(array){
    let corriente = [];
    let sueldo = [];
    let arraycontenedor = []
    for(i=0; i< array.length;i++){
        if (array[i].tipoCuenta == "corriente"){
            corriente.push(array[i])
        }else{
            sueldo.push(array[i])
        }
    }
    arraycontenedor.push(corriente)
    arraycontenedor.push(sueldo)
    return arraycontenedor;
}
let tipo = tipoDeCuenta(arrayCuentas)
console.log(tipo)

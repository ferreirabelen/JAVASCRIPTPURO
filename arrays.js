// Tenemos un array con palabras sueltas que, juntas, forman una gran frase,utilizando un método de array sobre arrayFrase,
// convertirlo en una oración entera, y almacenar ese String en una variable llamada fraseNueva.
let arrayFrase = [
    "No",
    "he",
    "fracasado,",
    "simplemente",
    "me",
    "he",
    "topado",
    "con",
    "diez",
    "mil",
    "soluciones",
    "equivocadas"
];
let fraseNueva = arrayFrase.join(" ");
console.log("la frase completa es: " + fraseNueva);

// Queremos sacar a Alexis, que acaba de egresar, y sabemos que está último en ese array.
// Para eso debemos, utilizando un método de array, guardar los datos de Alexis en una variable nueva llamada alumnoEgresado.
let estudiantes = [
    {
    nombre: "Alvaro",
    promedio: 9,
    curso: "Android"
    },
    {
    nombre: "Daniel",
    promedio: 6,
    curso: "Full Stack"
    },
    {
    nombre: "Alexis",
    promedio: 3,
    curso: "iOS"
    }
];

let alumnoEgresado = estudiantes.pop();
console.log(alumnoEgresado);

// Se inscribieron dos estudiantes nuevos y queremos agregarlos al final del array estudiantes.
let estudiantes2 = [
    {
    nombre: 'Alvaro',
    promedio : 9,
    curso : 'Android',
    },
]

estudiantes2.push({
    nombre: 'Juan',
    promedio : 5,
    curso : 'iOS',
    });
console.log(estudiantes2);

//length
let texto = "hola soy un string";
console.log(texto.length);


//ejercicio string 
function reemplazoFastFast(){
    let texto = "soy un string";
    texto = texto.replace("string","variable");
    return texto;
}
let mostrar = reemplazoFastFast();
console.log(mostrar)


//ejercicio string 
function menciona(){
    let texto = "soy un string";
    let palabra = texto.indexOf("string");
    texto = palabra
    return true;
}
let i = menciona();
console.log(i)

//me muestra que tipo de dato es 
function tipo(string){
    let tipo = typeof string;
    return tipo;
}

let M = tipo(true);
console.log(M)
//inicializa una variable con un string vacio
let numeroActual="";
let numeroAnterior="";
let numeroDeOperacion="";


//funcion que muestra en la pantalla el numero
function mostrar(numero){
    //concatena los 2 string (añade un numero)
    numeroActual+=numero;
    //actualiza la pantalla de la calculadora
    document.getElementById("display").innerHTML = numeroActual;
}

function Operacion(signo){
    numeroAnterior=numeroActual;
    document.getElementById("displaySuperior").innerHTML=numeroActual+signo
    numeroActual="";
    numeroDeOperacion=signo
}

function igual(){
    document.getElementById("displaySuperior").innerHTML=""
    switch(numeroDeOperacion){
        case '+':   
            numeroActual=Number(numeroAnterior)+Number(numeroActual)
        break;
        case '-':
            numeroActual=Number(numeroAnterior)-Number(numeroActual)
        break;
        case '*':
            numeroActual=Number(numeroAnterior)*Number(numeroActual)
        break;
        case '/':
            numeroActual=Number(numeroAnterior)/Number(numeroActual)
        break;
        default:
    }
    document.getElementById("display").innerHTML=numeroActual;
}
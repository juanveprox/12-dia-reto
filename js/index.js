let numeroRandom = Math.floor(Math.random() * 100) + 1;

const botonEnviar = document.querySelector(".formulario__enviar");
const numeroIngresado = document.querySelector(".formulario__numero");
const resultado = document.querySelector(".resultado");
const numJugado = document.querySelector(".resultado__jugado");

let numero;
let listaNumJugados = [];

const imgArriba = document.createElement("img");
imgArriba.src = "/iconos/arrow_up_icon.svg";
const imgAbajo = document.createElement("img");
imgAbajo.src ="/iconos/arrow_down_icon.svg"


botonEnviar.addEventListener("click",()=>{

    if(numeroIngresado.value == ""){
        alert("Tienes que colocar un numero :)")
    }else{
        numero = parseInt(numeroIngresado.value);
        juego();
        numeroIngresado.value = "";
    }
})

function agregarNum(){
    listaNumJugados.push(numero);
    numJugado.textContent ="Numeros Jugados: " +  listaNumJugados.join(', ');

    if(listaNumJugados.length == 10){
        alert("Has perdido :C");
        location.reload();

    }
}

function juego(){
    if(numero > numeroRandom){
        agregarNum();
        resultado.textContent = " El numero esta por encima ";
        resultado.appendChild(imgArriba);

    }else if(numero < numeroRandom){
        agregarNum();
        resultado.textContent = " El numero esta por debajo ";
        resultado.appendChild(imgAbajo);
        
    }else{
        alert("Has ganado")
        location.reload();
    }
}


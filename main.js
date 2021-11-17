
   
function random(n){
    return (Math.floor(Math.random() * n + 1))
}

let imgTiempo = ["img/Lluvia.jpg", "img/Nublado.jpg", "img/Soleado.jpg"];

const hoy = new Date();
const diaHoy = hoy.getDate();
const mesHoy = hoy.getMonth();
const yearHoy = hoy.getFullYear();
const horaActual = hoy.getHours();
const minutos = hoy.getMinutes();
const horaText = document.getElementById("hour");
const pTiempo = document.getElementById("diaActual");


pTiempo.innerHTML += `${diaHoy} / ${mesHoy} / ${yearHoy}`
// horaText.innerHTML += `${horaActual}: ${minutos}`;
horaText.innerHTML += reloj();


function cambiar(){
    document.getElementById("imgTiempo").src = imgTiempo[random(3) - 1]
}


function reloj() {
    if(horaActual < 10) {
        horaActual = "0" + horaActual;
    }
    if(minutos < 10) {
        minutos = "0" + minutos;
    }

    miReloj = horaActual + " : " + minutos;
    return miReloj;
} 

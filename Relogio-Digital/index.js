const horaEl = document.getElementById("hora");
const minutoEl = document.getElementById("minutos");
const segundoEl = document.getElementById("segundos");
const ampmEl = document.getElementById("ampm");

function atualizarRelogio(){
    let hora = new Date().getHours();
    let min = new Date().getMinutes();
    let seg = new Date().getSeconds();
    let ampm = "AM"

    hora = hora < 10 ? "0" + hora : hora;
    min = min < 10 ? "0" + min : min;
    seg = seg < 10 ? "0" + seg : seg;

    horaEl.innerText = hora;
    minutoEl.innerText = min;
    segundoEl.innerHTML = seg;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        atualizarRelogio();
    }, 1000)
}
atualizarRelogio();
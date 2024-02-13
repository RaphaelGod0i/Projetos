const horaEl = document.getElementById("hora");
const minutoEl = document.getElementById("minutos");
const segundoEl = document.getElementById("segundos");
const ampmEl = document.getElementById("ampm");

function atualizarRelogio(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"

    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    horaEl.innerText = h;
    minutoEl.innerText = m;
    segundoEl.innerHTML = s;
    ampmEl, (innerText = ampm);
    setTimeout(()=>{
        atualizarRelogio();
    }, 1000)
}
atualizarRelogio();
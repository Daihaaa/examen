function Mensaje() {
    history.forward();
    window.location.href = "juego2.html";
}

let estadosBotones = {};

function buyItem(imageUrl, buttonId) {

    if (estadosBotones[buttonId]) {
        return;
    }
    estadosBotones[buttonId] = true;

    document.getElementById('Itemm').src = imageUrl;
    document.getElementById('miCaja').style.display = 'flex';
    let button = document.getElementById(buttonId);
    button.innerHTML = "<h3 class='equipar-text'>Equipar</h3>";
}

function ocultarCaja() {
    document.getElementById('miCaja').style.display = 'none'
}
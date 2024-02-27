


document.addEventListener("DOMContentLoaded", function () {
    const inicio = document.getElementById("enter");
    history.forward();
    inicio.addEventListener("click", function () {
        // location.href = "juego2.html";
        location.replace("/juego2.html")
    });
});

    document.addEventListener("DOMContentLoaded", function () {
    const confi = document.getElementById("config");
    confi.addEventListener("click", function(){
        // location.href = "configuracion.html";
        location.replace("/configuracion.html")
    })
    });

    document.addEventListener("DOMContentLoaded", function () {
        const tienda = document.getElementById("shop");
        tienda.addEventListener("click", function(){
            // location.href = "practica.html";
            location.replace("/practica.html")
        })
        });
    
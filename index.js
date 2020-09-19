document.querySelector(".coming-soon").addEventListener("click", alertaSecaoIncompleta);
btnAnimated();

function alertaSecaoIncompleta() {
    alert("Essa seção do site ainda está sendo produzida, em breve será adicionada.");
}

function btnAnimated() {
    document.querySelector("#to-watch .btn").classList.add("btn-animated");
    setTimeout(function () {
        document.querySelector("#to-watch .btn").classList.remove("btn-animated");

    }, 500);
    setTimeout(function () {
        btnAnimated();
    }, 2400);
}
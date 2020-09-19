$(".coming-soon").click(alertaSecaoIncompleta);
btnAnimated();

function alertaSecaoIncompleta() {
  alert(
    "Essa seção do site ainda está sendo produzida, em breve será adicionada."
  );
}

function btnAnimated() {
  $("#to-watch .btn").addClass("btn-animated");
  setTimeout(function () {
    $("#to-watch .btn").removeClass("btn-animated");
  }, 500);
  setTimeout(function () {
    btnAnimated();
  }, 2400);
}

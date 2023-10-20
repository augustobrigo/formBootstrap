window.onload = inicio;

function inicio() {
  console.log("entro en inicio");
  let btnAceptar = document.getElementById("aceptar");
  btnAceptar.onclick = obtenerDatos;
}

function obtenerDatos() {
  console.log("entro en obtenerDatos");

  let ciclo = document.querySelector("input[name=radio]").value;
  let modulos = document.querySelectorAll("input[name=modulos]");

  let marcados = [];

  modulos.forEach(obtenerMarcados);

  function obtenerMarcados(item, index) {
    if (item.checked) {
      marcados.push(item.value);
    }
  }

  let nombre = document.getElementById("nombre").value;
  let curso = document.getElementById("selectCurso").value;
  let horas = document.querySelectorAll("select[name=multipleselect]");
  console.log(horas);
  let horasMarcadas = [];

  for (let index = 0; index < horas[0].length; index++) {
    if (horas[0][index].selected) {
      horasMarcadas.push(horas[0][index].value);
    }
  }

  let comentario = document.getElementById("exampleFormControlTextarea1").value;

  let mensaje =
    "Ciclo: " +
    ciclo +
    "\nModulos: " +
    marcados +
    "\nNombre: " +
    nombre +
    "\nCurso: " +
    curso +
    "\nHoras asistidas: " +
    horasMarcadas +
    "\nComentario: " +
    comentario;

  alert(mensaje);
}

let botones = document.querySelectorAll(".btn");
//console.log(botones);
for (let i = 0; i < botones.length; i++) {
  const botonHTML = botones[i];
  botonHTML.addEventListener("click", mostrarSeccion);
}

//mostrarSeccion();

function mostrarSeccion() {
  let idBoton = this.getAttribute("id"); //"btnSeccionInicio"
  let idSeccion = idBoton.charAt(3).toLowerCase() + idBoton.substring(4); //"s" + "eccionInicio"
  cambiarSeccion(idSeccion);
}

cambiarSeccion("seccionInicio");

function cambiarSeccion(idS) {
  //idS = "seccionInicio"
  ocultarSecciones();
  document.querySelector("#" + idS).style.display = "block";
}

function ocultarSecciones() {
  let secciones = document.querySelectorAll(".seccion");
  for (let i = 0; i < secciones.length; i++) {
    const seccionHTML = secciones[i];
    seccionHTML.style.display = "none";
  }
}

mostrarBotones("localpersona");

function mostrarBotones(tipo) {
  for (let i = 0; i < botones.length; i++) {
    const botonHTML = botones[i];
    botonHTML.style.display = "none";
  }
  let botonesMostrar = document.querySelectorAll("." + tipo);
  for (let i = 0; i < botonesMostrar.length; i++) {
    const botonMostrar = botonesMostrar[i];
    botonMostrar.style.display = "inline-block";
  }
};
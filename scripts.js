barra = document.getElementById("barra");
btnT = document.getElementById("btnT");
catalogo = document.getElementById("categ");
lista = document.getElementById("lista");
logo2 = document.getElementById("logo-2");
imgC = document.getElementById("idCarrusel");
finfo = document.getElementById("idinfo");
mjssubcribirse =  document.getElementById("mensaje");
listcorreos = document.getElementById("listcorreos");

let imgCarrusel = ["img1", "img2", "img3", "img4"];
let i = 0;
init(); // establecer estado incial
function init() {
  catalogo.style.visibility = "hidden";
  lista.style.visibility = "hidden";
  logo2.style.display = "none";
  btnT.style.display = "none";
  finfo.style.display = "none";
  imgC.src = "assets/carrusel/" + imgCarrusel[i] + ".jpg";
  myTimer = setInterval(cambiarimg, 5000);
}

// CARRUSEL

function pasarfoto(direccion) {
  // tengo que resetear el contador

  clearInterval(myTimer);
  myTimer = setInterval(cambiarimg, 5000);
  cambiarimg(direccion);
}

function cambiarimg(direccion = 1) {
  i += direccion;
  if (i == imgCarrusel.length) {
    i = 0;
  }
  if (i == -1) {
    i = imgCarrusel.length - 1;
  }
  imgC.src = "assets/carrusel/" + imgCarrusel[i] + ".jpg";
}

function verFiltro() {
  if (catalogo.style.visibility == "visible") {
    catalogo.style.visibility = "hidden";
  } else {
    catalogo.style.visibility = "visible";
  }
}
function verFavoritos() {
  if (lista.style.visibility == "visible") {
    lista.style.visibility = "hidden";
  } else {
    lista.style.visibility = "visible";
  }
}
function iratop() {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
}
addEventListener("scroll", function () {
  if (barra.offsetTop > 640) {
    btnT.style.display = "block";
    logo2.style.display = "block";
  } else {
    btnT.style.display = "none";
    logo2.style.display = "none";
  }
});

// formulario Suscribase
// [a-zA-Z0-9]+\@{1}[a-zA-Z]{3,6}\.[a-zA-Z]{2,3}

function formSuscribase() {
  let inputSuscribase = document.getElementById("iSuscribase");

  inputSuscribase.classList.remove("error");
  inputSuscribase.classList.remove("valido");
  if (inputSuscribase.value.match("[a-zA-Z0-9-_]+@[a-zA-Z]{3,8}.[a-zA-Z]{2,4}")) {
    mensaje.innerHTML = "es valido";
    let item = document.createElement("li");
    item.innerText = inputSuscribase.value;
    listcorreos.appendChild(item);
    inputSuscribase.classList.add("valido");
  } else {
    mensaje.innerHTML = "NO es valido";
    inputSuscribase.classList.add("error");
  }

  return false;
}

function formContactenos() {
  let formContactenos = document.forms["formcontactenos"];
  let banderin = true;
  for (let i = 0; i < 3; i++) {
    formContactenos[i].classList.remove("error");
    formContactenos[i].classList.remove("valido");
  }

  if (!formContactenos["nombre"].value.match("[a-zA-Z\u00f1\u00d1 ]{3,25}")) {
    //en vez de posicion 0 pisicion id
    banderin = false;
    formContactenos["nombre"].classList.add("error");
  } else {
    formContactenos["nombre"].classList.add("valido");
  }

  if (!formContactenos["correo"].value.match("[a-zA-Z0-9-_]+@[a-zA-Z]{3,8}.[a-zA-Z]{2,4}")) {
    banderin = false;
    formContactenos["correo"].classList.add("error");
  } else {
    formContactenos["correo"].classList.add("valido");
  }
  if (!formContactenos["mensajearea"].value.match("[a-zA-Z0-9-_]{3,200}")) {
    banderin = false;
    formContactenos["mensajearea"].classList.add("error");
  } else {
    formContactenos["mensajearea"].classList.add("valido");
  }

  if (banderin) {
    let tbody = document.getElementById("tabla");
    let item = document.createElement("tr");
    let col1 = document.createElement("td");
    let col2 = document.createElement("td");
    let col3 = document.createElement("td");

    col1.innerText = formContactenos["nombre"].value;
    col2.innerText = formContactenos["correo"].value;
    col3.innerText = formContactenos["mensajearea"].value;

    item.appendChild(col1);
    item.appendChild(col2);
    item.appendChild(col3);

    tbody.appendChild(item);
  }

  return false;
}

function mostarDatos() {
  if (finfo.style.display == "block") {
    finfo.style.display = "none";
  } else {
    finfo.style.display = "block";
  }
}

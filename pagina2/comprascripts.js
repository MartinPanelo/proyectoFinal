parrafodescripcion = document.getElementById("des");
modeloparte = document.getElementById("modeloparte");
errornombre = document.getElementById("errornombre");
errorpais = document.getElementById("errorpais");
errornac = document.getElementById("errornac");
errorversion = document.getElementById("errorversion");
errorapellido = document.getElementById("errorapellido");
errortel = document.getElementById("errortel");
vencimientotarjeta = document.getElementById("vencimientotarjeta");
nombretarjeta = document.getElementById("nombretarjeta");
nrotarjeta = document.getElementById("nrotarjeta");
formenviado = document.getElementById("formenviado");
finfo = document.getElementById("idinfo");
formCompra = document.forms["formcompra"];
let caracteristicas = {
  motor:
    "Su avanzado motor de hidrogeno le permite tener la misma autonomía que un coche convencional sin necesidad de enchufarse y con cero emisiones contaminantes",
  motormodelo: "./../assets/pagina2/motor/scene.gltf",
  asiento:
    "Tienen un respaldo confortable que se adapta a la curvatura de la espalda formando una suave y sutil ese, la cual imita la forma de la columna vertebral humana.",
  asientormodelo: "./../assets/pagina2/mimi/asiento.glb",
  rueda:
    "Neumático para todas las estaciones del año que posee un innovador compuesto en la banda de rodamiento para un excelente agarre en cualquier tipo de suelo y un rodar silencioso.",
  ruedamodelo: "./../assets/pagina2/mimi/rueda.glb",
};
let paises = ["Argentina", "Narnia", "Loompaland", "Krakozhia"];
init();

function init() {
  parrafodescripcion.innerText = caracteristicas.motor;
  modeloparte.src = caracteristicas.motormodelo;
  finfo.style.display = "none";
}

function seteardescripcion(parte) {
  if (parte == "motor") {
    parrafodescripcion.innerText = caracteristicas.motor;
    modeloparte.src = caracteristicas.motormodelo;
  }
  if (parte == "asiento") {
    parrafodescripcion.innerText = caracteristicas.asiento;
    modeloparte.src = caracteristicas.asientormodelo;
  }
  if (parte == "rueda") {
    parrafodescripcion.innerText = caracteristicas.rueda;
    modeloparte.src = caracteristicas.ruedamodelo;
  }
}

function Compra() {
  let flag = true;
  errornombre.innerText = "";
  errorpais.innerText = "";
  errornac.innerText = "";
  errorversion.innerText = "";
  errorapellido.innerText = "";
  errortel.innerText = "";
  nrotarjeta.classList.remove("valido");
  nrotarjeta.classList.remove("error");
  nombretarjeta.classList.remove("valido");
  nombretarjeta.classList.remove("error");
  vencimientotarjeta.classList.remove("valido");
  vencimientotarjeta.classList.remove("error");
  let nacimiento = new Date(`${formCompra["nacimiento"].value}T00:00`);
  let datahoy = new Date();

  if (!formCompra["nombre"].value.match("[a-zA-Z ]") || formCompra["nombre"].value == "") {
    flag = false;
    errornombre.innerText = " --¡¡Error!!--";
   
  }
  if (!formCompra["apellido"].value.match("[a-zA-Z ]") || formCompra["apellido"].value == "") {
    errorapellido.innerText = " --¡¡Error!!--";
    flag = false;
   
  }
  if (!formCompra["telefono"].value.match("[0-9]") || formCompra["telefono"].value == "") {
    errortel.innerText = " --¡¡Error!!-";
    flag = false;
  
  }
  if (!paises.includes(formCompra["pais"].value)) {
    errorpais.innerText = "Seleccione un pais";
    flag = false;
  
  }
  /* console.log(date.getFullYear() +" / "+ (date.getMonth()+1)+" / "+ date.getDate()); */
  if (formCompra["nacimiento"].value == "") {
    errornac.innerText = " --¡¡Error!!--";
    flag = false;
  } else if (datahoy.getFullYear() - nacimiento.getFullYear() <= 17) {
    errornac.innerText = " Usted es menor";
    flag = false;
  }
  if (!formCompra["sport"].checked && !formCompra["lite"].checked && !formCompra["confort"].checked) {
    errorversion.innerText = " Seleccione una version";
    flag = false;
  }

  if (!formCompra["nrotarjeta"].value.match("[0-9]{16}")) {
    flag = false;
    nrotarjeta.classList.add("error");
  } else {
    nrotarjeta.classList.add("valido");
  }
  if (!formCompra["nombretarjeta"].value.match("[a-zA-Z ]") || formCompra["nombretarjeta"].value == "") {
    flag = false;
    nombretarjeta.classList.add("error");
  } else {
    nombretarjeta.classList.add("valido");
  }
  if (!formCompra["vencimientotarjeta"].value.match("[0-9]{4}") || formCompra["vencimientotarjeta"].value == "") {
    flag = false;
    vencimientotarjeta.classList.add("error");
  } else if (parseInt(formCompra["vencimientotarjeta"].value, 10) + 2000 - datahoy.getFullYear() <= 0) {
    //esta vencida
    vencimientotarjeta.classList.add("error");
    flag = false;
  } else {
    vencimientotarjeta.classList.add("valido");
  }

  if (flag) {
    tabladecompradores();
    formenviado.innerText = "El fomulario se envio correctamente";
    formenviado.classList.add("valido");
  }else{
    formenviado.innerText = "El fomulario no se envio";
    formenviado.classList.add("error");
  }
  return false;
}

function mostarDatos(msj) {
  if (finfo.style.display == "block") {
    finfo.style.display = "none";    
  } else {
    finfo.style.display = "block";
  }
}

function tabladecompradores() {
  let tbody = document.getElementById("tabla");
  let item = document.createElement("tr");
  let col1 = document.createElement("td");
  let col2 = document.createElement("td");
  let col3 = document.createElement("td");
  let col4 = document.createElement("td");
  let col5 = document.createElement("td");
  let col6 = document.createElement("td");
  let col7 = document.createElement("td");
  let col8 = document.createElement("td");
  let col9 = document.createElement("td");
  col1.innerText = formCompra["nombre"].value;
  col2.innerText = formCompra["apellido"].value;
  col3.innerText = formCompra["telefono"].value;
  col4.innerText = formCompra["nacimiento"].value;
  col5.innerText = formCompra["pais"].value;
  if (formCompra["sport"].checked) {
    col6.innerText = formCompra["sport"].value; //version
  }
  if (formCompra["confort"].checked) {
    col6.innerText = formCompra["confort"].value; //version
  }
  if (formCompra["lite"].checked) {
    col6.innerText = formCompra["lite"].value; //version
  }

  col7.innerText = formCompra["nrotarjeta"].value;
  col8.innerText = formCompra["nombretarjeta"].value;
  col9.innerText = formCompra["vencimientotarjeta"].value;
  item.appendChild(col1);
  item.appendChild(col2);
  item.appendChild(col3);
  item.appendChild(col4);
  item.appendChild(col5);
  item.appendChild(col6);
  item.appendChild(col7);
  item.appendChild(col8);
  item.appendChild(col9);
  tbody.appendChild(item);
}

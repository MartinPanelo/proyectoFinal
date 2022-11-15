parrafodescripcion = document.getElementById("des");
modeloparte = document.getElementById("modeloparte");
formCompra = document.forms["formcompra"];
let caracteristicas = {
    motor : "Su avanzado motor de hidrogeno le permite tener la misma autonomía que un coche convencional sin necesidad de enchufarse y con cero emisiones contaminantes",
    motormodelo : "/assets/pagina2/motor/scene.gltf",
    asiento : "Tienen un respaldo confortable que se adapta a la curvatura de la espalda formando una suave y sutil ese, la cual imita la forma de la columna vertebral humana.",
    asientormodelo : "/assets/pagina2/mimi/asiento.glb",
    rueda : "Neumático para todas las estaciones del año que posee un innovador compuesto en la banda de rodamiento para un excelente agarre en cualquier tipo de suelo y un rodar silencioso.",
    ruedamodelo : "/assets/pagina2/mimi/rueda.glb"
}

init();

function init() {

    parrafodescripcion.innerText = caracteristicas.motor;
    modeloparte.src = caracteristicas.motormodelo;

};



function seteardescripcion(parte) {


    if(parte == "motor"){
        parrafodescripcion.innerText = caracteristicas.motor;
        modeloparte.src = caracteristicas.motormodelo;
    }
    if(parte == "asiento"){
        parrafodescripcion.innerText = caracteristicas.asiento;
        modeloparte.src = caracteristicas.asientormodelo;
    }  
    if(parte == "rueda"){
        parrafodescripcion.innerText = caracteristicas.rueda;
        modeloparte.src = caracteristicas.ruedamodelo;
    }
  
  

}

function Compra(){

   console.log(formCompra["nombre"].value);
   console.log(formCompra["apellido"].value);

   console.log(formCompra["telefono"].value);
   console.log(formCompra["pais"].value);







    return false;
}
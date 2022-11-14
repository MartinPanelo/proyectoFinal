parrafodescripcion = document.getElementById("des");
modeloparte = document.getElementById("modeloparte");
let caracteristicas = {
    motor : "descripcion de motor",
    motormodelo : "/assets/pagina2/motor/scene.gltf",
    asiento : "descripcion del asiento",
    asientormodelo : "/assets/pagina2/mimi/asiento.glb",
    rueda : "descripcion de rueda",
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
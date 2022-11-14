barra = document.getElementById("barra");
btnT  = document.getElementById("btnT");
catalogo = document.getElementById("categ");
lista = document.getElementById("lista");
logo2 = document.getElementById("logo-2");
imgC =  document.getElementById("idCarrusel");
msj = document.getElementById("mensaje");
finfo = document.getElementById("idinfo");
listcorreos = document.getElementById("listcorreos");



let imgCarrusel = ["img1","img2","img3","img4"];
let i = 0;
init(); // establecer estado incial
function init(){
    
    catalogo.style.visibility = "hidden";
    lista.style.visibility = "hidden";
    logo2.style.display = "none";
    btnT.style.display = "none";
    finfo.style.display = "none";
    imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    myTimer = setInterval(cambiarimg, 5000);
 /*    cambiarimg(); */
   
/* setInterval(cambiarimg, 5000); */
};

// CARRUSEL

function pasarfoto(direccion){// tengo que resetear el contador 

 clearInterval(myTimer);
 myTimer = setInterval(cambiarimg, 5000);
cambiarimg(direccion);

}





/* setInterval(cambiarimg(1), 1000); */
function cambiarimg(direccion = 1){   
    i += direccion;
    console.log(i);
/*     if(i < imgCarrusel.length){
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    }else{
        i = 0;
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    }
    if(i == -1){
        i = (imgCarrusel.length-1);
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    } */
    if(i == imgCarrusel.length){
        i = 0;
    }
    if(i == -1){
        i = (imgCarrusel.length-1);
    }
    imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
}

function verFiltro(){
    if(catalogo.style.visibility == "visible"){
        catalogo.style.visibility = "hidden";
    }else{
        catalogo.style.visibility = "visible"
    };
};
function verFavoritos(){
    if(lista.style.visibility == "visible"){
        lista.style.visibility = "hidden";
    }else{
        lista.style.visibility = "visible"
    };
};
function iratop ()  {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
};
addEventListener("scroll",function(){
    
    console.log(barra.offsetTop);
    if(barra.offsetTop > 640){
        btnT.style.display = "block";
        logo2.style.display = "block";
    }else{
        btnT.style.display = "none";
        logo2.style.display = "none";
    }
});



// formulario Suscribase
// [a-zA-Z0-9]+\@{1}[a-zA-Z]{3,6}\.[a-zA-Z]{2,3}

function formSuscribase(){
    let inputSuscribase = document.getElementById("iSuscribase");
   
    inputSuscribase.classList.remove("error");
    inputSuscribase.classList.remove("valido");
    if(inputSuscribase.value.match("[a-zA-Z0-9-_]+\@[a-zA-Z]{3,8}\.[a-zA-Z]{2,4}")){
        console.log("es valido");
        msj.innerHTML= "es valido";
        let item = document.createElement("li");
        item.innerText = inputSuscribase.value;
        listcorreos.appendChild(item);
        console.log(inputSuscribase.value);
        inputSuscribase.classList.add("valido");
       
    }else{
        console.log("NO es valido");
        msj.innerHTML = "NO es valido";
        inputSuscribase.classList.add("error");
        console.log(inputSuscribase.value);
       

    }
 //   console.log("me ejecute");
    return false;
}

function formContactenos(){
    let formContactenos = document.forms["formcontactenos"];
   // let tabla = document.getElementById("tabla");
    let banderin = true;
    for(let i=0; i<3;i++){
        formContactenos[i].classList.remove("error");
        formContactenos[i].classList.remove("valido");
    }
  
    console.log(formContactenos.elements);
   
    if(!formContactenos["nombre"].value.match("[a-zA-Z ]{3,25}")){ //en vez de posicion 0 pisicion id
        banderin = false;
        formContactenos["nombre"].classList.add("error");
    }else{
        formContactenos["nombre"].classList.add("valido");
    };

    if(!formContactenos["correo"].value.match("[a-zA-Z0-9-_]+\@[a-zA-Z]{3,8}\.[a-zA-Z]{2,4}")){
        banderin = false;
        formContactenos["correo"].classList.add("error");
    }else{
        formContactenos["correo"].classList.add("valido");
    };
    if(!formContactenos["mensaje"].value.match("[a-zA-Z0-9-_]{3,200}")){
        banderin = false;
        console.log("el msj esta mal")
        formContactenos["mensaje"].classList.add("error");
    }else{
        console.log("el msj esta bien")
        formContactenos["mensaje"].classList.add("valido");
    };

    if(banderin){
        let tbody = document.getElementById("tabla");
        let item = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
    
        col1.innerText = formContactenos["nombre"].value;
        col2.innerText = formContactenos["correo"].value;
        col3.innerText = formContactenos["mensaje"].value;
    
        console.log(col1);
    
        item.appendChild(col1);
        item.appendChild(col2);
        item.appendChild(col3);
    
        tbody.appendChild(item);
    
      //  tabla.appendChild(tbody); 
    }
   

    

    return false;
}




function mostarDatos(msj){
    if(finfo.style.display == "block"){
        finfo.style.display = "none"
        console.log("no se ve")
    }else{
        console.log("se ve")
        finfo.style.display = "block";
    }
    
}




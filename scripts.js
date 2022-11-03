barra = document.getElementById("barra");
btnT  = document.getElementById("btnT");
catalogo = document.getElementById("categ");
lista = document.getElementById("lista");
logo2 = document.getElementById("logo-2");
imgC =  document.getElementById("idCarrusel");
let imgCarrusel = ["img1","img2","img3"];
let i = 0;
init(); // establecer estado incial
function init(){
    catalogo.style.visibility = "hidden";
    lista.style.visibility = "hidden";
    logo2.style.display = "none";
    btnT.style.display = "none";
    imgC.src = "./../assets/carrusel/"+ imgCarrusel[i] + ".jpg";
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
    if(i < imgCarrusel.length){
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    }else{
        i = 0;
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    }
    if(i == -1){
        i = (imgCarrusel.length-1);
        imgC.src = "assets/carrusel/"+ imgCarrusel[i] + ".jpg";
    }
   
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
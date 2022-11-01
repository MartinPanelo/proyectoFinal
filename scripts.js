barra = document.getElementById("barra");
btnT  = document.getElementById("btnT");
catalogo = document.getElementById("categ");
lista = document.getElementById("lista");
logo2 = document.getElementById("logo-2");
init(); // establecer estado incial
function init(){
    catalogo.style.visibility = "hidden";
    lista.style.visibility = "hidden";
    logo2.style.display = "none";
    btnT.style.display = "none";
};


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
    if(barra.offsetTop > 500){
        
        btnT.style.display = "block";
    }else{
        btnT.style.display = "none";
    }



    if(barra.offsetTop != 270){
        
        logo2.style.display = "block";
    }else{
        logo2.style.display = "none";
    }
})
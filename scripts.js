init(); // establecer estado incial
function init(){
    document.getElementById("categ").style.visibility = "hidden";
    document.getElementById("lista").style.visibility = "hidden";
    document.getElementById("logo-2").style.display = "none";
};


function verFiltro(){
    if(document.getElementById("categ").style.visibility == "visible"){
        document.getElementById("categ").style.visibility = "hidden";
    }else{
        document.getElementById("categ").style.visibility = "visible"
    };
};

function verFavoritos(){
    if(document.getElementById("lista").style.visibility == "visible"){
        document.getElementById("lista").style.visibility = "hidden";
    }else{
        document.getElementById("lista").style.visibility = "visible"
    };
};



function iratop ()  {
    document.body.scrollIntoView({
        behavior: "smooth",
      });
  };





addEventListener("scroll",function(){
    barra = document.getElementById("barra");
    
    if(barra.offsetTop != 270){
        
        document.getElementById("logo-2").style.display = "block";
    }else{
        document.getElementById("logo-2").style.display = "none";
    }
})
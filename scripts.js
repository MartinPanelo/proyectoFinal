init(); // establecer estado incial
function init(){
    document.getElementById("categ").style.visibility = "hidden";
    document.getElementById("lista").style.visibility = "hidden";
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
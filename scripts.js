init(); // establecer estado incial
function init(){
    document.getElementById("c").style.visibility = "hidden";
};


function verFiltro(){
    if(document.getElementById("c").style.visibility == "visible"){
        document.getElementById("c").style.visibility = "hidden";
    }else{
        document.getElementById("c").style.visibility = "visible"
    };
};

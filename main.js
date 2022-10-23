

document.addEventListener('DOMContentLoaded',documentReady , false);

function documentReady(){

    var navmenuid = document.getElementById("navmenuid");
    navmenuid.style.display = "none";
document.getElementById("menuid").onclick=function(){


    if (navmenuid.style.display === "none") {
        navmenuid.style.display = "block";
    } else {
        navmenuid.style.display = "none";
    }
};
}


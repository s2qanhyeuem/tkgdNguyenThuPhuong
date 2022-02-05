
var over = document.getElementById("overlay");
var mo = document.getElementById("modal");
var btnReg = document.getElementById("btn__reg");
var close = document.getElementById("close");
var btnLogin = document.getElementById("btn__login");



function showModal (){
    over.classList.add("overlay--on")
    mo.classList.add("modal--on");
    
    
}


function removeModal(){
    over.classList.remove("overlay--on");
    mo.classList.remove("modal--on");
}

function redirectHome(){
    window.location= "/home.html";
}

btnReg.addEventListener('click',showModal)
close.addEventListener('click', removeModal)

// check data 

btnLogin.addEventListener('click',redirectHome);
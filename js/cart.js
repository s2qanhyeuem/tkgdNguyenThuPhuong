// user _ control
var user = document.getElementById("user");
var logout =document.getElementById("logout");
var userinfo = document.getElementById("user__info");

function user_control(){
    alert("Không có gì đâu mà ấn ^^");
}
function userLogout(){
    window.location.href = '/index.html';
}
user.addEventListener('click',user_control);
logout.addEventListener('click',userLogout);
userinfo.addEventListener('click',function(){
    window.location.href = '/userInfo.html';
})

//cart control
var cart = document.getElementById("cart");
function cartControl(){
    window.location.href = '/cart.html'
}
cart.addEventListener('click',cartControl);

// back to home
var logo__title = document.getElementById("logo__title");
function backToHome(){
    window.location.href = '/home.html';
}
logo__title.addEventListener('click',backToHome);


// choose cart 
var cartform = document.getElementsByClassName("cart-form");
var check_cart = document.getElementsByClassName("check-cart");
var check_radio = document.getElementsByName("price");
function checkCart(){
    for(var i = 0; i <cartform.length ; i ++){

        if(i > 0){
            cartform[i].classList.add("cart-form-check");
            cartform[i-1].classList.remove("cart-form-check");
        }
        
    }
}
function clickCart(){   
    for(var i = 0 ; i< check_cart.length; i++){
        check_cart[i].addEventListener('click',checkCart)
    }
    

}
clickCart()
// su kien nhap ma giam gia
// var sale =document.getElementById("apply-sale");
// var salecode = document.getElementsByClassName("salecode");

// function typecode(){
//     salecode.addEventListener('keyup',function(){
//         sale.style.cursor = "pointer";
//         sale.style.backgroundColor = "#000";
//         sale.style.color = "#fff";
//     })
// }
// typecode()
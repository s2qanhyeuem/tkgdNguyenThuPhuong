
// script  select item
var search__icon = document.getElementById("search__icon");
var search__input = document.getElementById("search");
var back__icon = document.getElementById("back__icon");

function showSearchBox (){
    search__input.style.display = 'block';
    search__icon.style.display = 'none';
    back__icon.style.display ='block';
}
function hideSearchBox (){
    search__input.style.display = 'none';
    search__icon.style.display = 'inline-block';
    back__icon.style.display ='none';
}

search__icon.addEventListener('click',showSearchBox);
back__icon.addEventListener('click',hideSearchBox);

// back to home
var logo__title = document.getElementById("logo__title");
function backToHome(){
    window.location.href = '/home.html';
}
logo__title.addEventListener('click',backToHome);

// add to cart 

var addCart = document.getElementById("add__to__cart");

addCart.addEventListener("click",function (){
    alert("Đặt hàng thành công!")
})

// user control
var user = document.getElementById("user");
var logout =document.getElementById("logout");

function user_control(){
    alert("Chức năng chưa hoàn thiện!");
}
function userLogout(){
    window.location.href = '/index.html';
}
user.addEventListener('click',user_control);
logout.addEventListener('click',userLogout);

//cart control
var cart = document.getElementById("cart");
function cartControl(){
    alert("Chức năng chưa hoàn thiện!");
}
cart.addEventListener('click',cartControl);

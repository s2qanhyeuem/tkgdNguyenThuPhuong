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

// su kien thay doi thogn tin
var btnupdate = document.getElementById("btn__update");
btnupdate.addEventListener('click',function(){
    alert("Bạn đã ấn vào nút đổi thông tin !")
})

// search__icon:hover
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



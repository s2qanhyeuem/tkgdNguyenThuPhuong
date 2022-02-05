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

// back to home
var logo__title = document.getElementById("logo__title");
function backToHome(){
    window.location.href = '/home.html';
}
logo__title.addEventListener('click',backToHome);

// slide + autodot


var myIndex = 0;
autoSlide()

function autoSlide (){
    var i;
    var slide = document.getElementsByClassName("mySlide")
    var dot = document.getElementsByClassName("dot__slide");
    var itemshirt = document.getElementsByClassName("item__shirt");
    for(i = 0 ; i < slide.length ; i++){
        slide[i].style.display = 'none';
        dot[i].classList.add("dots");
    }
    myIndex++;
    if(myIndex > slide.length){
        myIndex = 1; 
    }
    slide[myIndex-1].style.display = 'block';
    dot[myIndex-1].classList.remove("dots");
    setTimeout(autoSlide,2000)
}

// user _ control
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


// tab__item control
// fix

// btn tim hieu them
var btnContact = document.getElementById("btn__aboutme");
function contact(){
    window.location.href = 'https://www.facebook.com/xinchaobannho';
}
btnContact.addEventListener('click',contact);

// redirect 
var itemTitle = document.getElementsByClassName("item__title");

function redirectContainer(){
    for(var i = 0; i< itemTitle.length ; i++){
        itemTitle[i].addEventListener('click',function(){
            window.location.href =  'Produce.html';
        })
    }
}
redirectContainer()
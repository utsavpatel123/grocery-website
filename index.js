let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = function(){
     searchform.classList.toggle('active'); 
     
     menubar.classList.remove('active');
     loginpage.classList.remove('active');
     shoppingcart.classList.remove('active');
};

let shoppingcart = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = function(){
     shoppingcart.classList.toggle('active');

     menubar.classList.remove('active');
     loginpage.classList.remove('active');
     searchform.classList.remove('active');
};

let loginpage = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = function(){
     loginpage.classList.toggle('active');

     menubar.classList.remove('active');
     shoppingcart.classList.remove('active');
     searchform.classList.remove('active');
};


let menubar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = function(){
     menubar.classList.toggle('active');

     loginpage.classList.remove('active');
     shoppingcart.classList.remove('active');
     searchform.classList.remove('active');
};

window.onscroll = function(){
     menubar.classList.remove('active');
     loginpage.classList.remove('active');
     shoppingcart.classList.remove('active');
     searchform.classList.remove('active'); 
};


var swiper = new Swiper(".product-slider", {
     loop:true,
     spaceBetween: 20,
     autoplay:{
          delay:7500,
          disableoninteraction: false,
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });


   
var swiper = new Swiper(".review-slider", {
     loop:true,
     spaceBetween: 20,
     autoplay:{
          delay:7500,
          disableoninteraction: false,
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       768: {
         slidesPerView: 2,
       },
       1020: {
         slidesPerView: 3,
       },
     },
   });  


let body =document.querySelector("body");
let canvasMenu = document.getElementById("canvas-menu");
let menuMobile = document.querySelector(".menu-mobile");
let btnCloseCanvas = document.querySelector(".btn-close");

menuMobile.addEventListener('click', function() {
    canvasMenu.classList.toggle("active");
    menuMobile.classList.toggle("active");
    body.classList.toggle("actived-menu");

});

btnCloseCanvas.addEventListener('click', function() {
    canvasMenu.classList.remove("active");
    body.classList.remove("actived-menu");
    menuMobile.classList.remove("active");
});

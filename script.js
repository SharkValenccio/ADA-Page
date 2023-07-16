const nav = document.querySelector("nav"),
    toggleBtn = nav.querySelector(".toggle-btn1");

toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
});

var iconMenu = document.getElementById("iconMenu")

iconMenu.addEventListener("click", function() {

 var menuRadius = document.getElementById("menuRadius");

 if(menuRadius.style.display === "flex"){
    menuRadius.style.display = "none";
 } else {
    menuRadius.style.display = "flex";
 }
}); 
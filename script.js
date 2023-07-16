const nav = document.querySelector("nav"),
    toggleBtn = nav.querySelector(".toggle-btn1");

toggleBtn.addEventListener("click" , () =>{
    nav.classList.toggle("open");
});

/* ========== MOSTRAR MENU ========== */

/* Tomamos las variables */
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

/** Validamos Si la clase existe */

navToggle.addEventListener("click", () =>{
    navMenu.classList.add("show-menu")
})

/* ========== OCULTAR MENU ========== */
/** Validamos Si la constante existe */

navClose.addEventListener("click", () =>{
    navMenu.classList.remove("show-menu");
})

/* ========== REMOVER MENU MÓBIL ========== */

const navLink = document.querySelectorAll(".nav__link");

function linkAction(){
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
}

navLink.forEach(n => n.addEventListener("click", linkAction));



/* ========== CAMBIAR COLOR DE HEADER CUANDO SE HAGA SCROLL ========== */

function scrollHeader(){
  const header = document.getElementById("header");
  if(this.scrollY >= 100){
      header.classList.add("scroll-header");
  }
  else{
      header.classList.remove("scroll-header");
  }
}

/* Cuando se haga Scroll */
window.addEventListener("scroll", scrollHeader);

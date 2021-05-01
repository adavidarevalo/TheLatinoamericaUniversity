const navButton = document.getElementById("nav-button");
const navMenuUl = document.getElementById("navMenuUl");
//Aparece y desaparece el menu
navButton.addEventListener("click", () => {
  navMenuUl.classList.toggle("add")
    })

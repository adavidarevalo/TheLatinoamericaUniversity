const navButton = document.getElementById("nav-button");
const navMenuUl = document.getElementById("navMenuUl");
var a=0;
//Aparece y desaparece el menu
navButton.addEventListener("click", () => {
  a = a + 1;
  switch (a) {
    case 1:
      navMenuUl.classList.remove("remove")
      navMenuUl.classList.add("add")
      break;
    case 2:
      navMenuUl.classList.remove("add")
      navMenuUl.classList.add("remove")
      a=0;
      break;
  }
    })


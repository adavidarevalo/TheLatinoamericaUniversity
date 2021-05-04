const btn = document.getElementById("nav-button")
const nav = document.getElementById("nav");
const password1 = document.getElementById("form_registrarse-password") 
const password2 = document.getElementById("form_registrarse-password2") 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const inputs = document.querySelectorAll("#form input");
var a=0;
//Aparece y desaparece el menu
btn.addEventListener("click", () => {
    a = a + 1;
  switch (a) {
    case 1:
      nav.classList.remove("remove")
      nav.classList.add("add")
      break;
    case 2:
      nav.classList.remove("add")
      nav.classList.add("remove")
      a=0;
      break;
  }
    })
//Validacion del Formulario
const validar = (e) =>{
  switch (e.target.name) {
    case "name":
      if(e.target.value === ""){
        document.getElementById("falseName").innerHTML= "Introdusca su Nombre"
        document.getElementById("circle").classList.remove("block")
        document.getElementById("times").classList.remove("block")
      } else if(expresiones.name.test(e.target.value)){
        document.getElementById("circle").classList.add("block")
        document.getElementById("times").classList.remove("block")
        document.getElementById("falseName").innerHTML= ""
      } else {
        document.getElementById("circle").classList.remove("block")
        document.getElementById("times").classList.add("block")
        document.getElementById("falseName").innerHTML= "Nombre Incorrecto"
      }
      break;
      case "mail":
        if(e.target.value===""){
          document.getElementById("falseMail").innerHTML="Introdusca su Email"
        } else if(expresiones.mail.test(e.target.value)){
          document.getElementById("falseMail").innerHTML=""
        } else {
          document.getElementById("falseMail").innerHTML="Email Incorrecto"
        }
      case "pass1":
        if(e.target.value===""){
          document.getElementById("falsePass").innerHTML="Introdusca una Contraseña"
        } else if (expresiones.password.test(e.target.value)){
          document.getElementById("falsePass").innerHTML="";
          var contraseña1 = e.target.value;
        } else {
          document.getElementById("falsePass").innerHTML="Contraseña Incorrecta"
        }
      case "pass2":
        if(e.target.value===""){
          document.getElementById("diferentPass").innerHTML="Introdusca su Contraseña"
          document.getElementById("errado").classList.remove("block")
          document.getElementById("correcto").classList.remove("block")
        } else if(password1.value===password2.value){
          document.getElementById("correcto").classList.add("block")
          document.getElementById("errado").classList.remove("block")
          document.getElementById("diferentPass").innerHTML=""
        } else {
          document.getElementById("errado").classList.add("block")
          document.getElementById("correcto").classList.remove("block")
          document.getElementById("diferentPass").innerHTML="Su contraseña no coinciden"
        }
  }
}
inputs.forEach(input => {
  input.addEventListener("keyup", validar)
  input.addEventListener("blur", validar)
});
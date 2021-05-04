const btn = document.getElementById("nav-button")
const nav = document.getElementById("nav");
const password1 = document.getElementById("form_registrarse-password") 
const form = document.getElementById("form") 
const password2 = document.getElementById("form_registrarse-password2") 
const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^.{4,12}$/, 
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};
const verdad = {
  name: false,
  mail: false,
  pass1: false,
  pass2: false

}
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
        verdad.name= false
      } else if(expresiones.name.test(e.target.value)){
        document.getElementById("circle").classList.add("block")
        document.getElementById("times").classList.remove("block")
        document.getElementById("falseName").innerHTML= ""
        verdad.name= true
      } else {
        document.getElementById("circle").classList.remove("block")
        document.getElementById("times").classList.add("block")
        document.getElementById("falseName").innerHTML= "Nombre Incorrecto"
        verdad.name= false
      }
      break;
      case "mail":
        if(e.target.value===""){
          document.getElementById("falseMail").innerHTML="Introdusca su Email"
          verdad.mail= false
        } else if(expresiones.mail.test(e.target.value)){
          document.getElementById("falseMail").innerHTML=""
          verdad.mail= true
        } else {
          document.getElementById("falseMail").innerHTML="Email Incorrecto"
          verdad.mail= false
        }
        break;
      case "pass1":
        if(e.target.value===""){
          document.getElementById("falsePass").innerHTML="Introdusca una Contraseña"
          verdad.pass1= false
        } else if (expresiones.password.test(e.target.value)){
          document.getElementById("falsePass").innerHTML="";
          var contraseña1 = e.target.value;
          verdad.pass1= true
        } else {
          document.getElementById("falsePass").innerHTML="Contraseña Incorrecta"
          verdad.pass1= false
        }
        break;
      case "pass2":
        if(e.target.value===""){
          document.getElementById("diferentPass").innerHTML="Introdusca su Contraseña"
          document.getElementById("errado").classList.remove("block")
          document.getElementById("correcto").classList.remove("block")
          verdad.pass2= false
        } else if(password1.value===password2.value){
          document.getElementById("correcto").classList.add("block")
          document.getElementById("errado").classList.remove("block")
          document.getElementById("diferentPass").innerHTML=""
          verdad.pass2= true
        } else {
          document.getElementById("errado").classList.add("block")
          document.getElementById("correcto").classList.remove("block")
          document.getElementById("diferentPass").innerHTML="Su contraseña no coinciden"
          verdad.pass2= false
        }
        break;
  }
}
inputs.forEach(input => {
  input.addEventListener("keyup", validar)
  input.addEventListener("blur", validar)
});
form.addEventListener("submit", (e)=>{
  e.preventDefault();
  if(verdad.name && verdad.mail && verdad.pass1 && verdad.pass2){
    form.reset();
    document.getElementById("warnings").innerHTML="Enviado"
    document.getElementById("circle").classList.remove("block")
    document.getElementById("correcto").classList.remove("block")
    setTimeout(() => {
      document.getElementById("warnings").innerHTML=""
    }, 3000);
  } else {
    document.getElementById("warnings").innerHTML="Complete correctamente el Formulario"
  }
})

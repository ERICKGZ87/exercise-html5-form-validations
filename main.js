// variables
const formCard = document.querySelector("#Carddata");
const formCardInpust = document.querySelectorAll("#Carddata input");

console.log("🚀 ~ file: main.js ~ line 4 ~ formCardInpust", formCardInpust)
// campos
const card = document.querySelector("#Card");
const Cvc = document.querySelector("#cvc");
const Amount = document.querySelector("#Amount");
const FirtsName = document.querySelector("#FirtsName");
const LastName = document.querySelector("#LastName");
const city = document.querySelector("#city");
const inputState = document.querySelector("#inputState");
const postalcode = document.querySelector("#postalcode");

/// expresiones regulares
let rgCard =
  /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
//let rgCard = /[0-9]{6,12}/;
let rgCvc = /^\d{4,4}$/;
let rgAmount =
  /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;

let rgFirtsName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

// funciones
ListenerEventos();

function ListenerEventos() {

  formCardInpust.forEach((inpust)=>{
   inpust.addEventListener("blur",ValidarCampos)
 })
 inputState.addEventListener("blur",ValidarCampos)
  formCard.addEventListener("submit", EnviarForm)
 
  document.addEventListener("DOMContentLoaded", IniciarAPP);
}

function IniciarAPP(e) {

  
}

function validarTodo(ev,InputName,IdInput,n1,reXg,messageVacio,messageBien,messageError){

  if (InputName.value == "" && ev.target.id === IdInput) {
    MensajeError(messageVacio, n1);
    InputName.classList.remove("correcto");
  }
  if (InputName.value !== "" && ev.target.id === IdInput) {

    if (reXg.test(InputName.value)) {
      InputName.classList.remove("error");
      InputName.classList.add("correcto");
      MensajeBien(messageBien, n1);
    } else {
      InputName.classList.remove("correcto");
      InputName.classList.add("error");
      MensajeError(messageError, n1);
    }
  }

}


function ValidarCampos(e) {

validarTodo(e,card,"Card",0,rgCard,"todos los campos deben estar llenos","bien","La tarjeta es invalida")// card
validarTodo(e,Cvc,"cvc",1,rgCvc,"todos los campos deben estar llenos","bien","debes agregar 4 numeros")// cvc
validarTodo(e,Amount,"Amount",2,rgAmount,"Debes agregar un numero mayor a cero","bien","la cantidad no es valida")// amount
validarTodo(e,FirtsName,"FirtsName",3,rgFirtsName,"Ingresa un nombre","bien","el nombre no es valido")// nombre
validarTodo(e,LastName,"LastName",4,rgFirtsName,"Ingresa un apellido","bien","el apellido no es valido")// apellido
validarTodo(e,city,"city",5,rgFirtsName,"Ingresa una ciudad","bien","la ciudad no es valido")// city
validarTodo(e,inputState,"inputState",6,rgFirtsName,"Ingresa un pais","bien","el pais no es valido")// pais


}

function MensajeBien(mensaje, n) {
  Pimg = document.querySelector(`.imgValidacion${n}`);
  Pimg.classList.remove("msjError");
  Pimg.classList.add("msjBien");
  Pimg.innerHTML =mensaje + " " +"<img src='./tilde.png' alt='' width='30px' height='30px'></img>";
}

function MensajeError(mensaje, n) {
  Pimg = document.querySelector(`.imgValidacion${n}`);
  Pimg.classList.remove("msjBien");
  Pimg.classList.add("msjError");
  Pimg.innerHTML =mensaje + " " +"<img src='./error.png' alt='' width='30px' height='30px'></img>";
}

function EnviarForm(e){
e.preventDefault();

const cardValidacion=rgCard.test(card.value);
const cvcValidation=rgCvc.test(Cvc.value);
const AmountValidacion=rgAmount.test(Amount.value);
const FirtsNameValidacion=rgFirtsName.test(FirtsName.value);
const LastnameValidacion=rgFirtsName.test(LastName.value);
const cityValidacion=rgFirtsName.test(city.value);
const InpuStateValidacion=  inputState.value !== "";


if (cardValidacion && 
  cvcValidation &&
  AmountValidacion &&
  FirtsNameValidacion &&
  LastnameValidacion &&
  cityValidacion &&
  InpuStateValidacion
   ){
  
 
setTimeout(()=>{
  
  e.target.submit();
},3000)
MensajeBien("Enviado correctamente!",50)
}else{
  
  MensajeError("Todos los campos son Obligatorios!",50)

}


}

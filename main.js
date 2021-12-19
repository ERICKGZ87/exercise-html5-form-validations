// variables
const formCard = document.querySelector("#Carddata");

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
  card.addEventListener("blur", ValidarCampos);
  Cvc.addEventListener("blur", ValidarCampos);
  Amount.addEventListener("blur", ValidarCampos);
  FirtsName.addEventListener("blur", ValidarCampos);
  LastName.addEventListener("blur", ValidarCampos);
  city.addEventListener("blur", ValidarCampos);
  formCard.addEventListener("submit", EnviarForm)
  inputState.addEventListener("blur",ValidarCampos)
  document.addEventListener("DOMContentLoaded", IniciarAPP);
}

function IniciarAPP(e) {}

function ValidarCampos(e) {

  // card
  if (card.value == "" && e.target.id === "Card") {
    MensajeError("El campo no puede estar vacio", 0);
    card.classList.remove("correcto");
  }
  if (card.value !== "" && card.id === "Card") {
    if (rgCard.test(card.value)) {
      card.classList.remove("error");
      card.classList.add("correcto");
      MensajeBien("Bien", 0);
    } else {
      card.classList.remove("correcto");
      card.classList.add("error");
      MensajeError("La tarjeta es invalida", 0);
    }
  }
  //cvc
  if (Cvc.value == "" && e.target.id === "cvc") {
    MensajeError("El campo no puede estar vacio", 1);
    Cvc.classList.remove("correcto");
  }

  if (Cvc.value !== "" && Cvc.id === "cvc") {
    if (rgCvc.test(Cvc.value)) {
      Cvc.classList.remove("error");
      Cvc.classList.add("correcto");
      MensajeBien("Bien", 1);
    } else {
      Cvc.classList.remove("correcto");
      Cvc.classList.add("error");
      MensajeError("Debes ingresar 4 numeros", 1);
    }
  }
  //amount
  if (Amount.value == "" && e.target.id === "Amount") {
    // si esta vacio

    MensajeError("El campo no puede estar vacio", 2);
    Amount.classList.remove("correcto");
  }

  if (Amount.value !== "" && Amount.id === "Amount") {
    // si es diferente a vacio

    if (Amount.value > 0 && rgAmount.test(Amount.value)) {
      Amount.classList.remove("error");
      Amount.classList.add("correcto");
      MensajeBien("Bien", 2);
    } else {
      Amount.classList.remove("correcto");
      Amount.classList.add("error");
      MensajeError("Debes ingresar una cantidad minima de 1000$", 2);
    }
  }
  // FirtsName

  if (FirtsName.value == "" && e.target.id === "FirtsName") {
    // si esta vacio

    MensajeError("El campo no puede estar vacio", 3);
    Amount.classList.remove("correcto");
  }

  if (FirtsName.value !== "" && FirtsName.id === "FirtsName") {
    // si es diferente a vacio

    if (rgFirtsName.test(FirtsName.value)) {
      FirtsName.classList.remove("error");
      FirtsName.classList.add("correcto");
      MensajeBien("Bien", 3);
    } else {
      FirtsName.classList.remove("correcto");
      FirtsName.classList.add("error");
      MensajeError("El nombre es invalido", 3);
    }
  }

  // LastName

  if (LastName.value == "" && e.target.id === "LastName") {
    // si esta vacio

    MensajeError("El campo no puede estar vacio", 4);
    LastName.classList.remove("correcto");
  }

  if (LastName.value !== "" && LastName.id === "LastName") {
    // si es diferente a vacio

    if (rgFirtsName.test(LastName.value)) {
      LastName.classList.remove("error");
      LastName.classList.add("correcto");
      MensajeBien("Bien", 4);
    } else {
      LastName.classList.remove("correcto");
      LastName.classList.add("error");
      MensajeError("El Apellido es invalido", 4);
    }
  }
  // city
  if (city.value == "" && e.target.id === "city") {
    // si esta vacio
    MensajeError("Debes Agregar una ciudad",5);
    city.classList.remove("correcto");
  }

  if (city.value !== "" && city.id === "city") {
    // si es diferente a vacio

    if (rgFirtsName.test(city.value)) {
      city.classList.remove("error");
      city.classList.add("correcto");
      MensajeBien("Bien", 5);
    } else {
      city.classList.remove("correcto");
      city.classList.add("error");
      MensajeError("El nombre es invalido",5);
    }
  }
  //state
  if (inputState.value == "" && e.target.id === "inputState") {
    // si esta vacio
    MensajeError("Debes seleccionar un pais",6);
    inputState.classList.remove("correcto");
  }

  if (inputState.value !== "" && e.target.id === "inputState") {
    // si es diferente a vacio

    if (rgFirtsName.test(inputState.value)) {
      inputState.classList.remove("error");
      inputState.classList.add("correcto");
      MensajeBien("Bien", 6);
    } 
  }
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

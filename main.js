var formCard = document.getElementById('Carddata');
const inputs = document.querySelectorAll('#Carddata input');
var seleciones =document.querySelectorAll('#Carddata select');
var areaMensaje= document.querySelectorAll('textarea');


let rgCard = /^(?:4\d([\- ])?\d{6}\1\d{5}|(?:4\d{3}|5[1-5]\d{2}|6011)([\- ])?\d{4}\2\d{4}\2\d{4})$/;
//let rgCard = /[0-9]{6,12}/;
let rgCvc =/^\d{4,4}$/
let rgAmount= /^[+]?([1-9][0-9]*(?:[\.][0-9]*)?|0*\.0*[1-9][0-9]*)(?:[eE][+-][0-9]+)?$/;
let rgFirtsName=/^[a-zA-ZÀ-ÿ\s]{1,40}$/

///[0-9]{1,16}/;

// evento keyup del card
inputs[0].addEventListener("keyup", function () {
    if (inputs[0].value !== "" && rgCard.test(inputs[0].value)) {
        let carestilo = document.querySelector('#Card')
        carestilo.style.background = "#008f39 "
        let smallTagCard = document.querySelector('#card1');
        //smallTagCard.style.background = "green";
        //smallTagCard.style.display = 'block';
        smallTagCard.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let cardestilo = document.querySelector('#Card')
        cardestilo.style.background = "#e62e1b"
        let smallTagCard = document.querySelector('#card1');
       // smallTagCard.style.background = "red";
        smallTagCard.style.display = 'block';
        smallTagCard.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";

    }

});

//cierre evento del card keyup

//evento keyup del cvc
inputs[1].addEventListener("keyup", function () {
    if (inputs[1].value !== "" && rgCvc.test(inputs[1].value)) {
        let cvcestilo = document.querySelector('#cvc')
        cvcestilo.style.background = "#008f39 "
        let smallTagCvc = document.querySelector('#cvc1');
        //smallTagCvc.style.background = "green";
        //smallTagCvc.style.display = 'block';
        smallTagCvc.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let cvcestilo = document.querySelector('#cvc')
        cvcestilo.style.background = "#e62e1b"
        let smallTagCvc = document.querySelector('#cvc1');
       // smallTagCvc.style.background = "red";
        smallTagCvc.style.display = 'block';
        smallTagCvc.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";
      
    }

});
//cierre evento del cvc keyup

// evento keyup del amount
inputs[2].addEventListener("keyup", function () {
    if (inputs[2].value !== "" && rgAmount.test(inputs[2].value)) {

        let Amountestilo = document.querySelector('#Amount')
        Amountestilo.style.background = "#008f39 "
        let smallTagAmount = document.querySelector('#Amount1');
        //smallTagAmount.style.background = "green";
        //smallTagAmount.style.display = 'block';
        smallTagAmount.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let Amountestilo  = document.querySelector('#Amount')
       Amountestilo.style.background = "#e62e1b"
        let smallTagAmount = document.querySelector('#Amount1');
        //smallTagAmount.style.background = "red";
        smallTagAmount.style.display = 'block';
        smallTagAmount.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";
      
    }

});
//cierre evento del amount keyup

//evento first name keyup
inputs[3].addEventListener("keyup", function () {
    if (inputs[3].value !== "" && rgFirtsName.test(inputs[3].value)) {

        let FirtsNameEstilo = document.querySelector('#FirtsName')
        FirtsNameEstilo.style.background = "#008f39 "
        let smallTagFirtsName = document.querySelector('#FirtsName1');
        //smallTagFirtsName.style.background = "green";
        //smallTagFirtsName.style.display = 'block';
        smallTagFirtsName.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let FirtsNameEstilo  = document.querySelector('#FirtsName')
        FirtsNameEstilo.style.background = "#e62e1b"
        let smallTagFirtsName = document.querySelector('#FirtsName1');
        //smallTagFirtsName.style.background = "red";
        //smallTagFirtsName.style.display = 'block';
        smallTagFirtsName.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";
      
    }

});
//cierre evento del firts name keyup


// evento last name keyup
inputs[4].addEventListener("keyup", function () {
    if (inputs[4].value !== "" && rgFirtsName.test(inputs[4].value)) {

        let LastNameEstilo = document.querySelector('#LastName')
        LastNameEstilo.style.background = "#008f39 "
        let smallTagLastName = document.querySelector('#LastName1');
        //smallTagLastName.style.background = "green";
       // smallTagLastName.style.display = 'block';
        smallTagLastName.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let LastNameEstilo  = document.querySelector('#LastName')
        LastNameEstilo.style.background = "#e62e1b"
        let smallTagLastName = document.querySelector('#LastName1');
       // smallTagLastName.style.background = "red";
        //smallTagLastName.style.display = 'block';
        smallTagLastName.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";
      
    }

});
// cierre evento last name keyup

// evento city keyup

inputs[5].addEventListener("keyup", function () {
    if (inputs[5].value !== "" && rgFirtsName.test(inputs[5].value)) {

        let CityEstilo = document.querySelector('#city');
        CityEstilo.style.background = "#008f39 ";
        let smallTagCity1 = document.querySelector('#city1');
       // smallTagCity1.style.background = "green";
       // smallTagCity1.style.display = 'block';
        smallTagCity1.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
    else {
        let CityEstilo = document.querySelector('#city')
        CityEstilo.style.background = "#e62e1b";

        let smallTagCity2 = document.querySelector('#city1');
        //smallTagCity2.style.background = "red";
        //smallTagCity2.style.display = 'block';
        smallTagCity2.innerHTML = "<img src='./error.png' alt='' width='30px' height='30px'>";
      
    }

});

// cierre evento city keyup

// evento change state 

seleciones[0].addEventListener("change", function () {
    if (seleciones[0].value !== "") {

        let stateEstilo = document.querySelector('#inputState')
        stateEstilo.style.background = "#008f39 "
        let smallTagstate = document.querySelector('#inputState1');
        //smallTagstate.style.background = "green";
        //smallTagstate.style.display = 'block';
        smallTagstate.innerHTML = "<img src='./tilde.png' alt='' width='30px' height='30px'>";
    }
  

});


// cierre evento change state
formCard.addEventListener("submit", function (evento) {
    evento.preventDefault();

    var validarCard = evento.target.Card !== '' && rgCard.test(evento.target.Card.value);
    let validarCvc = evento.target.cvc !== '' && rgCvc.test(evento.target.cvc.value);
    let validarAmount= evento.target.Amount !== '' && rgAmount.test(evento.target.Amount.value);
    let validarFirtsName= evento.target.FirtsName !== '' && rgFirtsName.test(evento.target.FirtsName.value);
    let validarLastsName= evento.target.LastName !== '' && rgFirtsName.test(evento.target.LastName.value);
    let validarCity= evento.target.city !=='' && rgFirtsName.test(evento.target.city.value);
    let validarState= evento.target.inputState.value !=='';
    

    if (validarCard == true && validarCvc == true && validarAmount==true && validarFirtsName==true && validarLastsName== true && validarCity== true && validarState==true)
    {
          
        evento.target.submit();
                alert("los datos se han enviado correctamente!")

                
    }

  

    else if (validarState== false) {
       let Statestilo = document.querySelector('#inputState')
       //Statestilo.style.background = "red"
        let smallTag = document.querySelector('#inputState1');
       //smallTag.style.background = "red";
       smallTag.style.display = 'block';
       smallTag.innerHTML = "Debes seleccionar un pais";

       

       let msjConfirm= document.querySelector('#mensajeConfirm');
       msjConfirm.style.display="block"
       let msjTexto= document.querySelector('#msj');
       msjTexto.innerHTML="Debes rellenar todos los campos"

       for (let i =0;i<=inputs.length;i++){

        if (inputs[i].value==""){
            let smallmsj=document.querySelectorAll('small');
            smallmsj[i].innerHTML="El campo esta vacio"
            //smallmsj[i].style.background="red"

        }
         

       }

    
      
    }

});


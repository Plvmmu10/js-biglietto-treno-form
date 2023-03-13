// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let kmBox = document.querySelector('input[name= "km"]');

// var passenger age
let ageBox = document.querySelector('input[name= "age"]');


const confirmBtn = document.querySelector('#btnConfirm')
confirmBtn.addEventListener('click', function () {


let age = (ageBox.value);

let km = (kmBox.value);

// const km price
const kmPrice = 0.21;

// var ticket price
let ticketPrice = (km * kmPrice).toFixed(2);

// underage discont
const underageDiscount = (ticketPrice * 0.20);

// senior discount
const seniorDiscount = (ticketPrice * 0.40);

// var underage ticket price
let underageTicket = (ticketPrice - underageDiscount).toFixed(2);

// var senior ticket price
let seniorTicket = (ticketPrice - seniorDiscount).toFixed(2);

if ((! isNaN(km) && ! isNaN(age))) {

    if (age < 18) {

        document.getElementById('ticket-price-title').innerHTML=
        `<strong>Il prezzo del biglietto è</strong>`
        
        document.getElementById('ticket-price').innerHTML =
            `<strong>${underageTicket} &euro; - <em class="text-danger">20%</em>!</strong>`;

    }

    else if (age > 64) {

        document.getElementById('ticket-price-title').innerHTML=
        `<strong>Il prezzo del biglietto è</strong>`

        document.getElementById('ticket-price').innerHTML =
            `<strong>${seniorTicket} &euro; - <em class="text-danger">40%</em>!</strong>`;

    }

    else {

        document.getElementById('ticket-price-title').innerHTML=
        `<strong>Il prezzo del biglietto è</strong>`
        
        document.getElementById('ticket-price').innerHTML =
            `<strong>${ticketPrice} &euro;</strong>`;
    }

}else {
    document.getElementById('ticket-price-container').innerHTML =
        `<p class="text-danger strong">I dati inseriti non sono validi</p>`;
}



})


const cancelBtn = document.querySelector("#btnCancel");
cancelBtn.addEventListener('click', function(){

kmBox.value = "";

ageBox.value = "";

document.getElementById('ticket-price').innerHTML="";

document.getElementById('ticket-price-title').innerHTML="";

})
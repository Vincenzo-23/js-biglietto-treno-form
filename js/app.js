// prompt dove chiediamo all'utente il numero di chilometri da percorrere

// let chilometers = parseInt(prompt("Inserisci i km da percorrere")/*string*/) //number

// prompt dove chiediamo all'utente la sua età

// let age = parseInt(prompt("Inserisci la tua età")/*string*/) //number

// costo del biglietto di 0.21 € al km senza sconto

// let initialCost = 0.21*chilometers //number


// sconto in base all'età


// prezzo con sconto del 20% per i minorenni

// if(age < 18){
//     let discount = initialCost*0.20 //number
//     let finalCost = initialCost-discount //number
//     console.log("Il costo del biglietto è di €" + finalCost.toFixed(2))
 
// }

// // prezzo con nessuno sconto tra i 18 ed i 65 anni
// else if (age >= 18 && age <= 65){
//     console.log("Il costo del biglietto è di €" + initialCost.toFixed(2))
// }



// // prezzo con sconto del 40% per gli over 65

// else{
//     discount = initialCost*0.40 //number
//     finalCost = initialCost-discount //number
//     console.log("Il costo del biglietto è di €" + finalCost.toFixed(2))
 
// }



// far si che i dati non arrivino da un promp ma dagli input

// dichiaro gli elementi input

const inputKmElement = document.getElementById("km")
console.log(inputKmElement)

const inputAgeElement = document.getElementById("age")
console.log(inputAgeElement)

const inputSubmitElement = document.getElementById("submit")
console.log(inputSubmitElement)
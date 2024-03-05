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





// far si che i dati non arrivino da un prompt ma dagli input

// dichiaro gli elementi input

const inputKmElement = document.getElementById("km") // Element || null
console.log(inputKmElement)

const inputAgeElement = document.getElementById("age") // Element || null
console.log(inputAgeElement)

const inputSubmitElement = document.getElementById("submit") // Element || null
console.log(inputSubmitElement)


// aggiungo il listener del click sul pulsante 
inputSubmitElement.addEventListener("click", function(){

// età del passeggero

    let age = inputAgeElement.value

// km da percorrere

    let km = inputKmElement.value


// costo del biglietto senza sconto per le persone di età compresa tra i 18 ed i 65 anni

    let initialCost = 0.21 * parseFloat(km) //number
    console.log("Il costo intero del biglietto è di € " + initialCost.toFixed(2))


// costo del biglietto con ipotetico sconto

// prezzo con sconto del 20% per i minorenni
    if(age == "minorenne"){
        let discount = initialCost*0.20 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        let finalCost = initialCost-discount //number
        console.log("Il costo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))
     
    }
        
    
// prezzo con sconto del 40% per gli over 65
    
    else if(age == "over-65"){
        discount = initialCost*0.40 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        finalCost = initialCost-discount //number
        console.log("Il costo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))
     
    }

})






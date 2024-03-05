// Dichiaro gli elementi input

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


    if(age == "minorenne"){
        // prezzo con sconto del 20% per i minorenni
        let discount = initialCost*0.20 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        let finalCost = initialCost-discount //number
        console.log("Il costo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))
     
    }else if(age == "over-65"){
        // prezzo con sconto del 40% per gli over 65
        discount = initialCost*0.40 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        finalCost = initialCost-discount //number
        console.log("Il costo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))
     
    }else{
        discount = 0 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        finalCost = initialCost-discount //number
        console.log("Il costo del biglietto è di €" + finalCost.toFixed(2))
    }

})






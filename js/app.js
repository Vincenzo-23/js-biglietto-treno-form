//Dichiaro l'elemento input submit
const inputSubmitElement = document.getElementById("submit") // Element || null

// aggiungo il listener del click sul pulsante 
inputSubmitElement.addEventListener("click", function(){

// Dichiaro gli elementi input text e select

    const inputKmElement = document.getElementById("km") // Element || null

    const inputAgeElement = document.getElementById("age") // Element || null
        
// età del passeggero
    let age = inputAgeElement.value

// km da percorrere
    let km = inputKmElement.value


// prezzo base del biglietto senza sconti applicati
    let initialCost = 0.21 * parseFloat(km) //number
    console.log("Il prezzo base del biglietto è di € " + initialCost.toFixed(2))

// stampo in pagina il prezzo base del biglietto    
    let ticketPrice = document.getElementById("ticket_price")
    ticketPrice.innerHTML += `<span>${initialCost.toFixed(2)}</span>`


// costo del biglietto con ipotetico sconto

    if(age == "minorenne"){
        // sconto del 20% per i minorenni
        let discount = initialCost*0.20 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        // prezzo finale con sconto del 20% per i minorenni
        let finalCost = initialCost-discount //number
        console.log("Il prezzo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))

        // stampo in pagina l'ammontare dello sconto
        let discountAmount = document.getElementById("discount_amount")
        discountAmount.innerHTML += `<span>${discount.toFixed(2)}</span>`

        // stampo in pagina il prezzo finale del biglietto
        let finalPrice =document.getElementById("final_price")
        finalPrice.innerHTML += `<span>${finalCost.toFixed(2)}</span>`
     
    }else if(age == "over-65"){
        // sconto del 40% per gli over 65
        discount = initialCost*0.40 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        // prezzo finale con sconto del 40% per gli over 65
        finalCost = initialCost-discount //number
        console.log("Il prezzo del biglietto, con sconto applicato, è di €" + finalCost.toFixed(2))

        // stampo in pagina l'ammontare dello sconto
        let discountAmount = document.getElementById("discount_amount")
        discountAmount.innerHTML += `<span>${discount.toFixed(2)}</span>`

        // stampo in pagina il prezzo finale del biglietto
        let finalPrice =document.getElementById("final_price")
        finalPrice.innerHTML += `<span>${finalCost.toFixed(2)}</span>`
     
    }else{
        // sconto pari a 0 per le persone di età compresa tra i 18 ed i 65 anni
        discount = 0 //number
        console.log("Lo sconto applicato è di € " + discount.toFixed(2))
        // prezzo finale con sconto pari a 0
        finalCost = initialCost-discount //number
        console.log("Il prezzo del biglietto è di €" + finalCost.toFixed(2))

        // stampo in pagina l'ammontare dello sconto
        let discountAmount = document.getElementById("discount_amount")
        discountAmount.innerHTML += `<span>${discount.toFixed(2)}</span>`

        // stampo in pagina il prezzo finale del biglietto
        let finalPrice =document.getElementById("final_price")
        finalPrice.innerHTML += `<span>${finalCost.toFixed(2)}</span>`
    }

    
})






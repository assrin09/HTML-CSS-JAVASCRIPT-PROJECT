// javascript
// const conversionEl = document.getElementById("conversion-el")
let inputEl = document.getElementById("input-el")
let convertBtn =  document.getElementById("convert-btn")
let lengthEl  = document.getElementById("length-el")
let volumeEl = document.getElementById("Volume-el")
let kiloEl = document.getElementById("kilo-el")

const meterToFoot = 3.281 
const footToMeter = 0.304
const literToGallon = 0.264
const gallonToLiter =  3.785
const kilogramToPounds = 2.204
const poundToKilograme = 0.453 


convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    // inputEl.value = " "    
    
    lengthEl.textContent =
    `
    ${baseValue} meters =  ${baseValue * meterToFoot} feet | 
    ${baseValue} feet = ${baseValue * footToMeter} meter 
    `
    volumeEl.textContent = 
    `
    ${baseValue} liters =  ${baseValue * literToGallon} gallons | 
    ${baseValue} gallons = ${baseValue * gallonToLiter} liters 

    `     
    kiloEl.textContent = 
    `
     ${baseValue} kilos =  ${baseValue * kilogramToPounds} pounds | 
    ${baseValue} pounds = ${Math.floor(baseValue * poundToKilograme)} kilos 

    `
    
})

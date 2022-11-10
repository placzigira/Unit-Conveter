const lengt= document.getElementById("length-el")
const volume= document.getElementById("volume-el")
const mass= document.getElementById("mass-el")
let inputEl= document.getElementById("input-el")
let converBtn= document.getElementById('convert-btn')
// One meter = 3.281 Feet
let meter= 3.281
// One Liter = 0.264 Gallion
let liter= 0.264
// One Kilo = 2.204 Pound
let kilo= 2.204
let feetNeeded=0
let metersNeeded=0
let gallonNeeded=0
let litersNeeded=0
let poundsNeeded=0
let kilosNeeded=0
converBtn.addEventListener("click", function(){
    // Meters
    feetNeeded= inputEl.value * meter 
    metersNeeded= inputEl.value / meter 
//    Liters
    gallonNeeded= inputEl.value * liter
    litersNeeded= inputEl.value / liter 
    // Kilo
    poundsNeeded= inputEl.value * kilo
    kilosNeeded= inputEl.value / kilo
    lengt.innerHTML= `${inputEl.value} meters = ${feetNeeded.toFixed(3)} feet | ${inputEl.value} feet = ${metersNeeded.toFixed(3)} meters`
    volume.innerHTML= `${inputEl.value} liters = ${gallonNeeded.toFixed(3)} gallons | ${inputEl.value} gallons = ${litersNeeded.toFixed(3)} Liters`
    mass.innerHTML= `${inputEl.value} kilos = ${poundsNeeded.toFixed(3)} pounds | ${inputEl.value} pounds = ${kilosNeeded.toFixed(3)} kilos`
    
})

"use strict";

window.onload = init;

function init() {
    const button = document.getElementById("button");
    button.onclick = onButtonClicked;
}


function onButtonClicked() {

    // input
    const inputPickup = document.getElementById("inputPickup");
    const inputDays = document.getElementById("inputDays");
  let days = Number(inputDays.value);
    let carRentalResults = (29.99 * days)
    let optionsADay = 0;
    let under25 = 0;
  
   
    // checks
    let tollChecked = document.getElementById("tollCheck").checked;
    let gpsChecked = document.getElementById("gpsCheck").checked;
    let roadsideChecked = document.getElementById("roadsideCheck").checked;


    // radio
    let yesRadioChecked = document.getElementById("yesRadio").checked;

    
    //let
  

// ifelse

if (tollChecked) {
    optionsADay += 3.95;
    
}  if (gpsChecked) {
    optionsADay += 2.95;
    
}  if (roadsideChecked) {
    optionsADay += 2.95;
    
} 


if (yesRadioChecked){
    under25 = 0.3;

} 

// lets for ifs
 let optionsResults = optionsADay * days;
let surchargeResults = carRentalResults + optionsResults * under25;
let totalDueResults = carRentalResults + optionsResults + surchargeResults;



  // output const
  const carRental = document.getElementById("carRental");
  const options = document.getElementById("options");
  const surcharge = document.getElementById("surcharge");
  const totalDue = document.getElementById("totalDue");


// output innerhtml
carRental.innerHTML = carRentalResults.toFixed(2) ;
options.innerHTML = optionsResults.toFixed(2);
surcharge.innerHTML = surchargeResults.toFixed(2);
totalDue.innerHTML = totalDueResults.toFixed(2);


}

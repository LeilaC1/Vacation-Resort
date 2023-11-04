"use strict";

window.onload = init;

function init() {
  const estimateButton = document.getElementById("estimateButton");
  estimateButton.onclick = onEstimateButtonClicked;
}

function onEstimateButtonClicked() {
  // Input elements
  const inputName = document.getElementById("inputName").value;
  const inputDays = Number(document.getElementById("inputDays").value);
  const inputAdults = Number(document.getElementById("inputAdults").value);
  const inputChildren = Number(document.getElementById("inputChildren").value);
  const inputCheckin = new Date(document.getElementById("inputCheckin").value);
  const kingRadio = document.getElementById("kingRadio");
  const queenRadio = document.getElementById("queenRadio");
  const twoBedRadio = document.getElementById("twoBedRadio");
  const militaryCheck = document.getElementById("militaryCheck");
  const seniorCheck = document.getElementById("seniorCheck");

  // Output elements
  const stayCostOutput = document.getElementById("stayCostOutput");
  const discountsOutput = document.getElementById("discountsOutput");
  const taxOutput = document.getElementById("taxOutput");
  const totalDueOutput = document.getElementById("totalDueOutput");
  const codeOutput = document.getElementById("codeOutput");

  const checkInMonth = inputCheckin.getMonth() + 1;
  const confirmationCode =
    inputName.substring(0, 3) +
    "-" +
    checkInMonth +
    inputCheckin.getFullYear() +
    "-" +
    inputDays +
    ":" +
    inputAdults +
    ":" +
    inputChildren;

  let bedroomType;
  if (kingRadio.checked) {
    bedroomType = "King";
  } else if (queenRadio.checked) {
    bedroomType = "Queen";
  } else if (twoBedRadio.checked) {
    bedroomType = "twoBed";
  }

  const roomRate = getRoomRate(checkInMonth, bedroomType);
  const stayCost = roomRate * inputDays;

  let discount = 0;
  if (seniorCheck.checked) {
    discount = stayCost * 0.10;
  } else if (militaryCheck.checked) {
    discount = stayCost * 0.20;
  }

  const taxRate = 0.12;
  const taxAmount = taxRate * (stayCost - discount);

  const totalDue = stayCost - discount + taxAmount;

  // Display results
  stayCostOutput.innerHTML = stayCost;
  discountsOutput.innerHTML = discount;
  taxOutput.innerHTML = taxAmount;
  totalDueOutput.innerHTML = totalDue;
  codeOutput.innerHTML = confirmationCode;
}

function getRoomRate(checkInMonth, bedroomType) {
  if (bedroomType === "King" || bedroomType === "Queen") {
    if (checkInMonth < 5 || checkInMonth > 7) {
      return 250;
    } else {
      return 150;
    }
  } else if (bedroomType === "twoBed") {
    if (checkInMonth < 5 || checkInMonth > 7) {
      return 350;
    } else {
      return 210;
    }
  }
}

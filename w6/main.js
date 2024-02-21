const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = []

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }

  return houseHoldPoints;
}

function calculateEP(homeSize) {
  let houseSize = 0;
  if (homeSize === "large") {
    houseSize = 10;
  } else if (homeSize === "medium") {
    houseSize = 7;
  } else if (homeSize === "small") {
    houseSize = 4;
  } else if (homeSize === "apartment") {
    houseSize = 2;
  }
  return houseSize;
}
function displayOutObj(obj) {
  console.log(obj);
  const output = document.getElementById("output");
  const newP = document.createElement("h2");
  newP.textContent = `Carbon Footprint total is ${obj.cfpTotal}`;
  const newH3 = document.createElement("h3");
  newH3.textContent = 'based on the number in and size of your home'
  const newP2 = document.createElement("p");
  newP2.textContent = `${obj.hsPts} for your ${obj.houseS} home`;
  OUTPUT.appendChild(newP);
  OUTPUT.appendChild(newH3);
  OUTPUT.appendChild(newP2);
}

function start(first, last, houseMembers, houseSize,) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePTS = calculateEP(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push( {
    firstName: first,
    lastName: last,
    houseM: houseMembers,
    houseS: houseSize,
    hmPts: houseHoldPTS,
    hsPts: houseSizePTS,
    cfpTotal: total,
  });
 
}

function displayOutput() {
  for (obj of cfpData){
    const newP = document.createElement("h2");
    newP.textContent = `Carbon Footprint total ${obj.cfpTotal}`;
    const newH3 = document.createElement("h3");
    newH3.textContent = `based on the ${obj.houseM} people in ${obj.firstName} ${obj.lastName}'s home`;
    const newP2 = document.createElement("p");
    newP2.textContent = `you have ${obj.hsPts} points for your ${obj.houseS} home`;
    OUTPUT.appendChild(newP);
    OUTPUT.appendChild(newH3);
    OUTPUT.appendChild(newP2);
  }
}

console.log(cfpData);
displayOutput();

FORM.addEventListener('submit', function(e){
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseMembers = FORM.housem.value;
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseMembers, houseSize,);
  OUTPUT.innerHTML="";
  displayOutput();
  FORM.reset();
})
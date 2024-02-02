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


function start(houseMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers[0]);
  const houseSizePTS = calculateEP(houseSize[1]);
  const total = houseHoldPTS + houseSizePTS;
  cfpData.push([houseMembers, houseSize, calculateEP, total]);
}

function displayOutput() {

}

start(5,"apartment");
start(4, "large");
start(3,"medium");
start(2,"small");
start(6,"medium");
start(8,"apartment");

displayOutput()
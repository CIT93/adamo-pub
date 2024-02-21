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
  output.appendChild(newP);
  output.appendChild(newH3);
  output.appendChild(newP2);
}

function start(houseMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseMembers);
  const houseSizePTS = calculateEP(houseSize);
  const total = houseHoldPTS + houseSizePTS;
  const myObj2 = {
    houseM: houseMembers,
    houseS: houseSize,
    hmPts: houseHoldPTS,
    hsPts: houseSizePTS,
    cfpTotal: total,
  }
  displayOutObj (myObj2);
  //cfpData.push([houseMembers, houseSize, houseHoldPTS, houseSizePTS, total]);
}

//function displayOutput() {
  //for (arr of cfpData){
    //console.log(arr)
    //const output = document.getElementById("output");
    //const newP = document.createElement("h2");
    //newP.textContent = `Carbon Footprint total is ${arr[4]}`;
    //const newH3 = document.createElement("h3");
    //newH3.textContent = 'based on the number in and size of your home'
    //const newP2 = document.createElement("p");
    //newP2.textContent = `${arr[3]} for your ${arr[1]} home`;
    //output.appendChild(newP);
    //output.appendChild(newH3);
    //output.appendChild(newP2);
  //}
//}

//function displayOutput() {
 // for (let i = 0; i < cfpData.length; i++){
  //  console.log(i)
   // const output = document.getElementById("output");
   // const newP = document.createElement("h2");
   // newP.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
   // const newH3 = document.createElement("h3");
   // newH3.textContent = 'based on the number in and size of your home'
    //const newP2 = document.createElement("p");
    //newP2.textContent = `${cfpData[3]} for your ${cfpData[1]} home`;
    //output.appendChild(newP);
    //output.appendChild(newH3);
    //output.appendChild(newP2);
  //}
//}

start(5,"apartment");
start(4, "large");
start(3,"medium");
start(2,"small");
start(6,"medium");
start(8,"apartment");

displayOutput();

//for (initialization; condition; afterthought)
// statement

//for (let i = 0; i < 5; i++) {
  //block scope
 //console.log(i);
//}

//for (let i = 1; i < 16; i++) {
  //block scope
 //console.log(i);
//}

//for (let i =6; i > -1; i--) {
  //block scope
 //console.log(i);
//}

// Intro to objects

const myArr = [];
const myObj = {
  cfpTotal: 18,
  houseSize: "small",
  displayOut: function(){
    console.log("this is a method call");
    console.log(this.houseSize);
  }
};
//console.log(myObj.cfpTotal)
//console.log(myObj["houseSize"])
myObj.displayOut();
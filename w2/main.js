const houseMembers = 6;
const houseSize = 7;
const food = 14;
const water = 5;
const houseItem = 4;
const waste = 50;
const recycle = 8;
const travel = 4;
const total = houseMembers + houseSize + food + water + houseItem + waste + recycle + travel;

const myHeading = document.querySelector("h2");
myHeading.textContent = total;
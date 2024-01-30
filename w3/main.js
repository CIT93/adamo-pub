let carbonfootprintpoints = 0;

function determineHouseHoldPts (numberInHousehold) {
    console.log('Inside the function')
    if (numberInHousehold === 1) {
    carbonfootprintpoints = carbonfootprintpoints + 14;
} else if(numberInHousehold === 2) {
    carbonfootprintpoints = carbonfootprintpoints + 12;
} else if(numberInHousehold === 3) {
carbonfootprintpoints = carbonfootprintpoints + 10;
} else if(numberInHousehold === 4) {
    carbonfootprintpoints = carbonfootprintpoints + 8;
} else if(numberInHousehold === 5) {
    carbonfootprintpoints = carbonfootprintpoints + 6;
} else if(numberInHousehold === 6) {
    carbonfootprintpoints = carbonfootprintpoints + 4;
} else if(numberInHousehold > 6) {
    carbonfootprintpoints = carbonfootprintpoints + 2;
}
console.log(`Based on the number of members in the household of ${numberInHousehold} your carbon footprint points would be ${carbonfootprintpoints}.`)

}

//const numberInHousehold = 3;
// global scope
//determineHouseHoldPts(3)
//determineHouseHoldPts(4)

function calculateEP (homeSize) {
    if (homeSize === 'large') {
        carbonfootprintpoints = carbonfootprintpoints + 10;
    } else if (homeSize === 'medium') {
    carbonfootprintpoints = carbonfootprintpoints + 7;
} else if (homeSize === 'small') {
    carbonfootprintpoints = carbonfootprintpoints + 4;
} else if (homeSize === 'apartment') {
    carbonfootprintpoints = carbonfootprintpoints + 2;
    console.log(`Based on your house size of ${homeSize} you have ${carbonfootprintpoints} points`)
}
} 
determineHouseHoldPts (6);
calculateEP('medium');
//rest operator ->
function calculateCratePrice(num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //200

function calculateCratePrice(...num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //[ 200, 400, 500, 2000 ]

function calculateCratePrice(val1, val2, ...num1) {
   return num1;
}
console.log(calculateCratePrice(200, 400, 500, 2000)); //[ 500, 2000 ]

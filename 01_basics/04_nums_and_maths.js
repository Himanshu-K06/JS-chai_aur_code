const score = 500;
// specifying the variable stores a number explicitely 
const balance = new Number(5500);  // dynamically declared, object
console.log(score);
console.log(balance);
// converting balance into string 
console.log(balance.toString().length); // balance won't become a string but doing this will return a duplicate object as string and return us that string's length 
console.log(typeof balance);  // object 
console.log(balance); // still a number

console.log(balance.toFixed(3)); // to fixed takes an integer input and returns us a number with specified number of decimal places which we placed as input in the function (used in ecommerce to show prices/gst)

const anotherValue = 524.8465;




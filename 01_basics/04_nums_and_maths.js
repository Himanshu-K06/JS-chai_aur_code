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
console.log(anotherValue.toFixed(2));

// inserting commas into a very big number to make it easier to read using toLocaleString() -- adds coma to in the number acc to 'murica's standards, type "en-IN" for Indian Standards
const hundreds = 100000000;
const tooMuchMoney = 8979879846;
console.log(hundreds.toLocaleString("en-IN"));
console.log(tooMuchMoney.toLocaleString("en-IN"));

// MAX_INT and MIN_INT in c++ ---->> MAX_VALUE and MIN_VALUE in Js



// ############################################################################################################################################################################################################################

// MATHS 

console.log(Math);  // Math is an object 
console.log(Math.abs(-155));
console.log(Math.round(4.2));
console.log(Math.ceil(5.1));
console.log(Math.floor(8.999));
console.log(Math.sqrt(225));
console.log(5**2);
// get me minimum value from so many diff numbers :
console.log(Math.min(15,7,21,69));
console.log(Math.max(15,7,21,69));   // get me minimum value from so many diff numbers

// generating random values using random() -- always returns a random no. between 0 and 1 --- [0,1]
console.log(Math.random());  // multiply 10 with output to get numbers from 0 to 10 AND TO AVOID THE CASE OF GETTING 0 IN FINAL RESULT , ADD 1 AFTER *10 
console.log(Math.random()*10+1);

// using Math.random() to return values between a certain min and max value or range
let min = 20;
let max = 40;  // using random() to generate numbers b/w 20 and 40 , we use a formula for that (max-min+1), whatever value generated - is multiplied by (max-min+1) or 21, +1 to avoid 0 case and by multiplying max-min we make sure that it is more than 0 - 1  and add min in the end to make sure it is more than min and less than max
console.log(Math.floor(Math.random()*(max-min+1)) + min);
console.log(Math.floor( Math.random()*(max-min+1)) + min);

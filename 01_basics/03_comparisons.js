// console.log("2">1);
// console.log("0005">=2);

console.log(null > 0);
console.log(null == 0); // null is not equal to zero until and unless converted into number 
console.log(null === 0);
console.log(null >= 0); // if null > 0 and null == 0 are false then this is a strange case ???
// ANSWER :: the reason is that comparison operator and == equality check work differently. Comparison operators convert null to number while equality operator does not that why null > 0 and null == 0 are false and null >= 0 is true

console.log("checking undefined now ");
console.log(undefined > 0);
console.log(undefined == 0); 
console.log(undefined === 0);
console.log(undefined >= 0);
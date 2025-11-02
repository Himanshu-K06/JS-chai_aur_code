// alert() can be used only in browser , it does not work in node 
console.log(typeof null); // important 
console.log(typeof undefined);

// NaN is a number datatype
// null converted to number is 0
let score = null;
let value = Number(score);  // null converted to number
console.log("null as number is ",value);

score = undefined;
value = Number(score);
console.log("undefined as number is ",value);

// datatypes can be differentiated on 2 types :  primitive and reference(non-primitive)
/*
 primitive is string,booleam,number,bigInt,null,undefined,symbol (use by value)(uses stack memory)
 reference : symbol object array (use by reference)(uses heap memory)
*/
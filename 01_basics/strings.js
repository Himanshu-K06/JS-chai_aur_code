// declaring string dynamically : 
let name = new String("Himanshu");   // String() here is the constructor of string
// string in object is not stored like an array, it is stored in key value pair : [ 0:H, 1:i, 2:m .......]
console.log(name);  // this will be shown as an object
console.log(name.length);
console.log(name.toUpperCase()); // this is not changing the values of name stored in heap, ToUpperCase() creates a new string and then sends it
console.log(name); // Himanshu 

// getting index of an element 
console.log(name.indexOf('a')); // indexOf() takes char input and then returns it's index 

// trim() only works for whitespaces and line terminators 
// includes() function takes input parameter as the string to be searched from another string and returns true or false depending if the given string is present in other string or not

let sentence = "this is himanshu kumar";
console.log(sentence.split('i'));
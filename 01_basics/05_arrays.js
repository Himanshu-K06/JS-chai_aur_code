// array is just like an object 
// declaring empty array
let arr = new Array(); 
let anotherArr = [];
let names = ["himanshu","himu","kumar","dubey"];
console.log(names.length);  // length is a property not a function in js
// alert(names);  // We can also use alert to show the whole array.

// An array can store elements of any type.
let ARR = ["Himanshu",23,true,[0,'c'],{ score : 5000}, "kulfi", function(){console.log("function in an array!!")}]; // i can add any other function call or any function definition as well and we can add alert() too.
console.log(ARR[4].score);
console.log(ARR[6]);
console.log(ARR[3][1]);

// accessing the index of an array using .at(index) method
console.log(ARR.at(-1));  // index in negtive -- access element from end, from end- indexing starts with 1 (not zero)
console.log(ARR.at(1));
console.log(ARR.at(4).score);

// Arrays in JavaScript can work both as a queue and as a stack. They allow you to add/remove elements, both to/from the beginning or the end.

let fruits = ["apples","watermelon","banana","berries","litchi"];
console.log(fruits.pop()); // pop() -- pop the last element and return it 
console.log(fruits);
fruits.push("plums"); // add plums to the end
console.log(fruits.shift()); // shift() -- pop from front, return it and change the index of allother elements
// unshift(arg) add this arg in the beginning of the array
fruits.unshift("Cranberry","oranges");
console.log(fruits);  

// push() and unshift() both can add multiple elements into the array

// array is an object, thus it can copied like an object, by reference 
let cats = ["Black"];
let newCats = cats; // copied cats array by reference
console.log(newCats===cats); // true
newCats.push("ginger","white");
console.log(cats);
// we can add poperties to arrays as they are objects
cats.count = 7;
cats.sound = "meow";
cats[9999999] = 100; // assign a property with the index far greater than its length
console.log(cats.sound); // meow
console.log(cats[1].sound); // undefined

/*
The ways to misuse an array:

Add a non-numeric property like arr.test = 5.
Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
Fill the array in the reverse order, like arr[1000], arr[999] and so on.

*/
for(let fruit of fruits){
    console.log(fruit);
}

// (let..of) accessess elements/values.

// length of array can be changed manually-- increase it - nothing happens, decrease it -- lenght of the turncated to the desired length and truncated elements are lost --- it is irreversible
let nums = [1,2,3,4,5,6,7];
nums.length = 3;
console.log(nums);
nums.length = 8;
console.log(nums);
console.log(nums[5]); // undefined as the length of array was changed 

// So, the simplest way to clear the array is: arr.length = 0;.
nums.length = 0;
console.log(nums);





// ARRAY METHODS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// delete
arr = ["I","am","Himanshu",25,true];
console.log(arr.length);
delete arr[4]; // removes the element at 4th index, array size stays the same 
console.log(arr.length);  
console.log(arr[4]); // undefined as i've deleted it 
// delete(key) only removes the value of that key in the object 



// splice
// It can do everything: insert, remove and replace elements. The syntax is:
// arr.splice(start, deleteCount, elem1, ..., elemN])
// It modifies arr starting from the index start: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.
arr = ["I", "study", "JavaScript", "right", "now"];
let removedArr = arr.splice(3,1);
console.log(arr);
console.log(removedArr);

arr = ["I", "study", "JavaScript", "right", "now"];
arr.splice(0,3,"Let's","dance");
console.log(arr);
// The splice method is also able to insert the elements without any removals. For that, we need to set deleteCount to 0
arr = ["I", "study", "JavaScript"];
arr.splice(2,0,"complex","language");
console.log(arr);

arr = [1,2,3];
arr.splice(-1,0,4,5,60);
console.log(arr);


// slice  - -- copies elements/entire array adn returns it 
arr = [1,2,3,4,5,6,7];
newArr = arr.slice(2,6);  // slice(start,end) --- only one arg-->start to end
let copiedArr = arr.slice(); // copies entire arr into copiedArr


// concat()
/* 
concat - The method arr.concat creates a new array that includes values from other arrays and additional items. The syntax is: arr.concat(arg1, arg2...)
It accepts any number of arguments – either arrays or values. The result is a new array containing items from arr, then arg1, arg2 etc.
*/

arr = [1,2];
let concatenatedArr = arr.concat([3,4,5],"HImanshu",7,99,1001,false);
console.log(concatenatedArr);




// map method  -- is a function. It expects a callback as an argument, which is a fancy way to say “I want you to pass another function as an argument to my function”. Map iterates the array, removing the need of a loop

// adding 1 to elements of an array 

function addOne(num){
    return num+1;
}
arr = [1,2,3,4,5,6];
let mappedArr = arr.map(addOne);
console.log(mappedArr);
console.log(arr);

// OR ---- we can use arrow functions

mappedArr = arr.map((num) => num+3);
console.log(mappedArr);




// filter()
/*
filter is somewhat similar to map. It still iterates over the array and applies the callback function on every item. However, instead of transforming the values in the array, it returns a new array where each item is only included if the callback function returns true for it.
*/

// selecting only odd elements from an array 
function isOdd(num){
    return num&2 !==0;
}
arr = [1,2,3,4,5,6,7,8,9];
let oddArr = arr.filter(isOdd);
console.log(oddArr);
// The filter method expects the callback to return either true or false. If it returns true, the value is included in the output. Otherwise, it isn’t



// forEach()
/*
The arr.forEach method allows to run a function for every element of the array.
The syntax:
    arr.forEach(function(item, index, array) {
    // ... do something with an item
    });
*/
arr = [1,2,3,4,5,6,7,8,9];
arr.forEach(function(item,index,arr){
    console.log(`${item} is at index ${index} in array ${arr}`);
});

["Himanshu", "redsec", "kaiser"].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});




// reverse :
arr = [1,2,3,4,5,6,7,8,9];
arr.reverse();
console.log(arr);




// sort(fn)
/*
 arr.sort() sorts the array in place, changing its element order. --> array is modified
- The items are sorted as strings by default. All elements are converted to strings for comparisons.

It may contain numbers or strings or objects or whatever. We have a set of some items. To sort it, we need an ordering function that knows how to compare its elements. The default is a string order.

*/

arr = [1,2,90,15,399];
arr.sort();
console.log(arr);  // OUTPUT : [ 1, 15, 2, 399, 90 ] ----> sorted as string , lexicographically
// To use our own sorting order, we need to supply a function as the argument of arr.sort()
function compare(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}  // return positive number for greater and negative for smaller --> simply return a-b;

arr = [1,2,90,15,399];
arr.sort(compare);
console.log(arr);

// OR 

arr = [15,2,90,1,399];
arr.sort(function(a,b){return a-b});
console.log(arr);


// OR -- even smaller version (arrow function)
arr = [15,2,90,1,399];
arr.sort((a,b)=> a-b);
console.log(arr);


// to sort strings -- use str.localeCompare method to correctly sort letters
let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log( countries.sort( (a, b) => a > b ? 1 : -1) ); // Andorra, Vietnam, Österreich (wrong)
console.log( countries.sort( (a, b) => a.localeCompare(b) ) ); // Andorra,Österreich,Vietnam (correct!)

let name = ["Himanshu","kaiser","berserker","Yuji"];
console.log(name.sort((a,b) => a.localeCompare(b)));




// split(delim) = splits the string into an array by the given delimiter delim 
name = "Himanshu,kaiser,berserker,Viper_A9,BloodGoblin,ShadowBorn";
arr = name.split(',');  // split the string - , as seperator
console.log(arr);
arr = name.split('i'); // split the string with i as seperator 
console.log(arr);

// The call to split('') with an empty string would split the string into an array of letters:
my_name = "Himanshu Kumar";
console.log(my_name.split(""));




// join(glue) does the reverse to split. It creates a string of arr items joined by glue between them.
name = ["Himanshu","kaiser","berserker","Viper_A9","BloodGoblin","ShadowBorn"];
let newNames = name.join("69");  // glue the array into a string using 69
console.log(newNames);



// reduce / reduceRight -- used to calculate a single value based on the array.
/*
The syntax is:
let value = arr.reduce(function(accumulator, item, index, array) {
  // ...
}, [initial]);

The function is applied to all array elements one after another and “carries on” its result to the next call.

Arguments:
accumulator – is the result of the previous function call, equals initial the first time (if initial is provided).
item – is the current array item.
index – is its position.
array – is the array.

As the function is applied, the result of the previous function call is passed to the next one as the first argument.
So, the first argument is essentially the accumulator that stores the combined result of all previous executions. And at the end, it becomes the result of reduce.

*/

arr = [1,2,3,4,5];
let sum = arr.reduce((sum,current)=> sum+current, 0);
console.log(sum);

// i can remove 0 as intitial value and it will still work
arr = [1,2,3,4,5];
sum = arr.reduce((sum,current)=> sum+current);
console.log(sum); // That’s because if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element.

/*
// case where no initial value fails 
arr = [];
sum= arr.reduce((sum,current)=>sum+current);// reduce will try to take first element of the arr as initial(in absence of it), but nothing in array, throws an error.
console.log(sum); // ERROR

*/


// The method arr.reduceRight does the same but goes from right to left.





// Array.isArray(value) -> returns true if the value is an array, and false otherwise.
console.log(Array.isArray({})); // object ----> false
console.log(Array.isArray([]));  // array  -----> true




// rewrite sumOfTripledEvens(array) function using map,reduce and filter
arr = [1,2,3,4,5,6,7,8,9];
// 1. filter evens
arr = arr.filter((a)=> a%2===0);
console.log(arr);
// 2. multiply them with 3
arr= arr.map(a => a*3);
console.log(arr);
// 3. sum all those values 
arr = arr.reduce((sum,current)=>sum+current,0);
console.log(arr);

// OR CAN BE WRITTEN AS :
let new_array = [1,2,3,4,5,6,7,8,9];
function sumOfTripledEvens(array) {
  return array.filter((num) => num % 2 === 0).map((num) => num * 3).reduce((acc, curr) => acc + curr);
//       |____________filter________________||__________map_______||_____________reduce______________|
}
let updatedArr= sumOfTripledEvens(new_array);
console.log(updatedArr);


// OR --- in more readable form 
new_array = [1,2,3,4,5,6,7,8,9];
function findSumOfEvenTriples(array){
    return array
            .filter(a => a%2===0)
            .map(a => a*3)
            .reduce((sum,curr)=>sum+curr,0);
}
updatedArr = findSumOfEvenTriples(new_array);
console.log(updatedArr);






// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”. That is: removes all dashes, each word after dash becomes uppercased.

// camelize("list-style-image") == 'listStyleImage'; ---> use split to split the string into an array, transform it and join back.
let bigWord = "this-is-himanshu-kumar";
function camelize(strng){
    return strng.split('-') //[this, is, himanshu, kumar]
                .map((word,index) => index===0 ? word : word[0].toUpperCase() + word.slice(1)) // except first word in splited array, for rest all words - capitalize first letter using toUpperCase() + slice every letter after index 0, add it with uppercased letter, add it together and return
                .join('');  
}
let camelizedWord = camelize(bigWord);
console.log(camelizedWord);




/*
Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
The function should not modify the array. It should return the new array.
*/
function filterRange(arr,a,b){ // array is the array , a and b are the numbers for comparison, only return filtered array 
    return arr.filter((item)=> (item>=a && item<=b));
}

arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log( filtered ); // 3,1 (matching values)
console.log( arr ); // 5,3,8,1 (not modified)




/*

Filter range "in place"

Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.
For instance:
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
alert( arr ); // [3, 1]

 */
function filterRangeInPlace(arr,a,b){
    for(let i=0;i<arr.length;i++){
        if(!(arr[i]>=a && arr[i]<=b)){
            arr.splice(i,1);
        }
    }
}
arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log( arr ); // [3, 1]



/**
 * Sort in decreasing order

let arr = [5, 2, 1, -10, 8];
// ... your code to sort it in decreasing order
alert( arr ); // 8, 5, 2, 1, -10

 */
arr = [5, 2, 1, -10, 8];
arr.sort((a,b)=> b-a);  // the idea is --> we returned positive value to denote a is greater and negative value to denote b is greater ---> i just switched their places --> -ve for a greater , +ve for b greater and now it sorts in reverse order, i cant use just sort as it converts all elements into strings and then sorts'em
console.log( arr ); // 8, 5, 2, 1, -10




/**
 * Copy and sort array

We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

Create a function copySorted(arr) that returns such a copy.
 */
function copySorted(arr){
    return arr.slice().sort((a,b)=>a.localeCompare(b));
    // slice() copies the entire array from start to end and return it , after that just sort it simple 
}
arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)




/**
 * Shuffle an array

Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

Multiple runs of shuffle may lead to different orders of elements.
All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, WITH EQUAL PROBABILITY OF EACH CASE !!!

 */
temp = [1, 2, 3];
shuffle(temp);
shuffle(temp);
shuffle(temp);
// there’s a great algorithm called Fisher-Yates shuffle. The idea is to walk the array in the reverse order and swap each element with a random one before it:

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
}


// testing the fucntion above with test case :
function shuffle(array){
    // start traversing from the end of the array
    for(let i=array.length-1;i>=0;i--){
        // get an index j from i using random()
        let j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]] = [array[j],array[i]];
    }
}

let count ={
    '123':0,
    '132':0,
    '312':0,
    '321':0,
    '213':0,
    '231':0
};

for(let i=0;i<1000000;i++){
    arr = [1,2,3];
    shuffle(arr);
    count[arr.join('')]++;
}
// display the count :
for(let key in count){
    console.log(`${key} = ${count[key]}`);  // visible that all permutation have nearly same probability of forming after shuffle
}





/**
 *Filter unique array members
importance: 4
Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

 */
function unique(arr) {
    let new_arr=[];
    for(let i=0;i<arr.length;i++){
        if(!new_arr.includes(arr[i])){
            new_arr.push(arr[i]);
        }
    }
  return new_arr;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) ); // Hare, Krishna, :-O


// ORR 

function unique(arr) {
    let new_arr=[];
    for(let word of arr){
        if(!new_arr.includes(word)){
            new_arr.push(word);
        }
    }
  return new_arr;
}

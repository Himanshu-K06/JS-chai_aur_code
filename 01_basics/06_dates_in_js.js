let today = new Date();
console.log(today);
// converting date into a string 
console.log(today.toString());  // time in string === day, date, time, time zone only
console.log(today.toDateString()); // day and date only
console.log(today.toISOString()); 
console.log(today.toJSON());
console.log(today.toLocaleDateString());  // DD/MM/YYYY format 
console.log(today.toLocaleString());  // DD/MM/YYYY time format  

// date is an object in js 
console.log(typeof today);

// custom date :
const myCreatedDate = new Date(2024,10,25);  // (year,month,date) ---> 10 =  november month, months have 0 idx
console.log(myCreatedDate.toDateString());  // months start from 0 becuase array like 

const anotherMyCreatedDate = new Date(2022,9,17,18,35); // (year,month,date,hour,minutes)
console.log(anotherMyCreatedDate.toLocaleString()); 

const myDateWithFormat = new Date("11-25-2025");  // mm-dd-yyyy -- iss format m months are counted from 1 (jan = 1, not 0)
console.log(myDateWithFormat.toLocaleString());  // dd/mm/yyyy time format

// js has time in mili-seconds 
// time stamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);  // gives me total time till now in mili seconds 
console.log(anotherMyCreatedDate.getTime());  // gives me total time till 2022 oct 17 
// getTime converts date into time (ms) 
// converting ms time into seconds
console.log(Math.floor(Date.now()/1000));  //  /1000 gives decimals, we don't want -- either use .floor() or .round()


// extracting other info from the date
let newDate = new Date();
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay()); // starting from monday(1)
console.log(newDate.getFullYear()); // year going on
console.log(newDate.getMonth());  // months will be given in the array index form, 0 = jan, not 1, so add 1 to give correct month to user 
console.log("Correct month : ",newDate.getMonth()+1);
console.log(newDate.getHours());
console.log(newDate.getMinutes());  


// MOST USED METHOD -- customizing .toLocaleString()
newDate = new Date();
console.log(newDate.toLocaleString('default',{  // press ctrl+SPACE to see all the properties
    weekday:'long',  // write weekday in long format 
    era:'long'
})); // 'default' = internationalization and then specifying in what format i want things by making them in objects 
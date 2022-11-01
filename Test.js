// //const numbers1 = ["Apple", "Orange", "Pine Apple", "Mango"];
// //const months = ["January", "February", "March", "April",
// //"May", "June", "July", "August", "September", "October",
// //"November", "December"];
// const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
// "Thursday", "Friday", "Saturday"];
// // //const numbers1 = [4, 9, 16, 44, 25, 29];
// // //const numbers1 = Array.from("13165464614");
// // //const numbers2 = numbers1.find(myFunction);
// // //const numbers2 = numbers1.entries();
// //numbers1 = ["Banana", "Guava", "Pine Apple"]
// // numbers1 [0] = "Toyota";
// // numbers1.push("Lichi");
// //let msec = Date.parse("2021-03-25");
// //const d = new Date(msec);
// //const d = new Date("2021-03-25");
// const d = new Date();
// //let month = months[d.getMonth()];
// let day = days[d.getDay()];
// let ms = Date.now();
// console.log(ms);
// //console.log(day);
// // //const numbers2 = numbers1.includes("Orange");
// // //const numbers2 = numbers1.indexOf("Orange");
// // //let position = numbers1.lastIndexOf("Apple") + 1;

// // // // try {
// // // //     const numbers1 = ["Apple", "Orange", "Apple", "Mango"];
// // // //     numbers1 = ["Banana", "Guava", "Pine Apple"]
// // // // }
// // // // catch (err) {
// // // //     console.log(err);
// // // // }

// // // function myFunction(value, index, array) {
// // //   return value > 2; 
// // // }

// // // // let text = "= ";
// // // // for(let x of numbers2){
// // // //     text += x + " ";
// // // // }

// //console.log(month);
// // //console.log(position);
// //console.log(numbers1);
// //console.log(d.getMonth());
// //console.log(numbers2);
// // //console.log(text);


// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / hour);

// console.log(years);

// const d = new Date();
// let diff = d.getTimezoneOffset();

// console.log(diff);

// const d = new Date();
// console.log(d.setDate(d.getDate() + 50));

// let text = "";
// const today = new Date();
// const someday = new Date();
// someday.setFullYear(2100, 0, 14);

// if(someday > today){
//     text = "Today is before " + someday;
// }else{
//     text = "Today is after " + someday;
// }

// let math = Math.abs(-64.12145);
// console.log(math);

// let math = Math.sin(90 * Math.PI / 180);
// console.log(math);

// let math1 = Math.cos(0 * Math.PI / 180);
// console.log(math1);

// let math2 = Math.min(0, 150, 30, 20, -8, -200, 180);
// console.log(math2);

// let math3 = Math.max(0, 150, 30, 20, -8, -200, 180);
// console.log(math3);

// let math4 = Math.random();
// console.log(math4);

// let math5 = Math.log(3);
// let math6 = 10 / Math.E;
// let math7 = Math.E * 3.6787944117144233;
// console.log(math7);

// let math8 = Math.log2(8);
// console.log(math8);

// let math9 = Math.log10(1000);
// console.log(math9);

// let math10 = Math.floor(Math.random() * 100);
// console.log(math10);

// let math11 = Math.floor(Math.random() * 100) + 1;
// console.log(math11);

// let min = 0;
// let max = 10;

// const value = getRndInteger(0, 10);

// function getRndInteger(min, max){
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// console.log(value);

// const value = getRndInteger(1, 10);

// function getRndInteger(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(value);

// const value = getRndInteger();

// function getRndInteger(){
//     return Boolean("false");
// }
// console.log(value);


// const value = getRndInteger(10 / "Hallo");

// function getRndInteger(x){
//     return Boolean(x);
// }
// console.log(value);


// let x = false;
// let y = new Boolean(false);

// console.log(typeof x);
// console.log(typeof y);
// console.log(x == y);
// console.log(x === y);


// let age = Number(25);

// if(isNaN(age)){
//     votable = "Input is not a number."
// }else{
//     votable = (age < 18)? "Too Young" : "Old enough";
// }

// console.log(votable);

// let name  = null;
// let text = "Missing";
// let result = name ?? text;

// console.log(result);


// const car = {type:"Fiat", model:"500", color:"White"};
// console.log(car?.name);

// let hour = new Date().getHours();

// if(hour < 18){
//     outputHour = "Good Day";
// }else{
//     outputHour = "Good Evening"
// }

// console.log(outputHour);


// let day;
// switch(new Date().getDay()){
//     case 0: 
//     day =  "Sunday";
//     break;
//     case 1: 
//     day =  "Monday";
//     break;
//     case 2: 
//     day =  "Tuesday";
//     break;
//     case 3: 
//     day =  "Wednesday";
//     break;
//     case 4: 
//     day =  "Thursday";
//     break;
//     case 5: 
//     day =  "Friday";
//     break;
//     case 6: 
//     day =  "Saturday";
//     break;
//     default:
//     day = "Looking forward to the Weekend";
// }

// console.log(day);



// let x = 0;
// switch(x){
//     case 0: 
//     day =  "Sunday";
//     break;
//     case 1: 
//     day =  "Monday";
//     break;
//     case 2: 
//     day =  "Tuesday";
//     break;
//     case 3: 
//     day =  "Wednesday";
//     break;
//     case 4: 
//     day =  "Thursday";
//     break;
//     case 5: 
//     day =  "Friday";
//     break;
//     case 6: 
//     day =  "Saturday";
//     break;
//     default:
//     day = "Looking forward to the Weekend";
// }

// console.log(day);

// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let text = " ";
// for(let i = 0; i < cars.length; i++){
//     text += cars[i] + " / ";
// }

// console.log(text);


// for (var i = 0; i < 10; i++) {
//     // some statements
//     console.log(i);
// }

//const person = {fname: "John ", lname: "Doe ", age: 25};
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let Text = " ";
// //for(let x in person){
// cars.forEach(myFunction);

// function myFunction(value, index, cars){
//     //Text += person[x];
//     Text += " / " + value;
// }

// console.log(Text);



// //const person = {fname: "John ", lname: "Doe ", age: 25};
// const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// let Text = " ";
// for(let x of cars){
//     Text += x + " ";
//     //console.log(Text);
// }

// console.log(Text);


// const language = "JavaScript";
// let Text1 = " ";
// for(let x of language){
//     Text1 += x + " ";
//     //console.log(Text);
// }

// console.log(Text1.toUpperCase());
// let i = 0;
// text = " ";
// while( i < 10){
//     text += i;
//     i++;
// }

// console.log(text);

// let text11 = " ";
// let j = 0;
// do {
//     text11 += j;
//     j++;
// } while (j < 10);

// console.log(text11);

// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = " ";

// for(; i < cars.length; ){
//     text += cars[i] + " ";
//     i++;
// }

// console.log(text);



// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i = 0;
// let text = " ";

// while (i < cars.length) {
//         text += cars[i] + " ";
//         i++;
// }

// console.log(text);
let text = "";
for (let index = 0; index < 10; index++) {
    if (index === 3) {
        break;
        
    }
    text = index;
    console.log(text);
    }



    let text1 = "";
for (let index = 0; index < 10; index++) {
    if (index === 3) {
        continue;
    }
    text1 = index;
    console.log(text1);
    }
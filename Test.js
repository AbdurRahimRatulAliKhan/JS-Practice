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
// let text = "";
// for (let index = 0; index < 10; index++) {
//     if (index === 3) {
//         break;
        
//     }
//     text = index;
//     console.log(text);
//     }



//     let text1 = "";
// for (let index = 0; index < 10; index++) {
//     if (index === 3) {
//         continue;
//     }
//     text1 = index;
//     console.log(text1);
//     }


    // const cars = ["BMW", "Volvo", "Saab", "Ford"];
    // let Text = "";
    // list: {
    //     Text += cars[0] + " ";
    //     Text += cars[1] + " ";
    //     break list;
    //     Text += cars[2] + " ";
    //     Text += cars[3] + " ";
    // }
    // console.log(Text);

    // const fruits = new Set(["a", "b", "c"]);
    // let text111 = "";

    // for (const x of fruits){
    //     text111 += " " + x;
    // }
    // console.log(text111);


    // const fruits = ["a", "b", "c"];
    // let text111 = "";

    // for (const x of fruits){
    //     text111 += " " + x;
    // }
    // console.log(text111);


    // const fruits = new Map([["a", 500], ["b", 200], ["c", 100]]);
    // let text111 = "";

    // for (const x of fruits){
    //     text111 += " " + x;
    // }
    // console.log(text111);


    // const letters = new Set();
    // const a = "a";
    // const b = "b";
    // const c = "c";

    // let text = "";
    
    // letters.add(a);
    // letters.add(b);
    // letters.add(c);

    // for (const x of letters.values()) {
    //     text += " " + x;
    // }

    // console.log(text);


    // const fruits = new Map([
    //     ["apples", 500], 
    //     ["bananas", 300],
    //     ["oranges", 200]
    // ]);

    // const fruits = new Map();

    // fruits.set("apples", 500);
    // fruits.set("bananas", 300);
    // fruits.set("oranges", 200);

    // let gets = fruits.get("apples");
    // let deletes = fruits.delete("apples");
    // let sizes = fruits.size;
    // let hsapple = fruits.has("apples");

    // let TEXT = "";
    // // fruits.forEach(function (value, key){
    // //     TEXT += " " + value; 
    // // });
    // for (const y of fruits.entries()) {
    //     TEXT += " " + y; 
    // }


    // console.log(gets);
    // console.log(deletes);
    // console.log(hsapple);
    // console.log(sizes);
    // console.log(TEXT);



    
//     console.log(typeof "John");
//     console.log(typeof 3.14);
//     console.log(typeof NaN);
//     console.log(typeof false);
//     console.log(typeof [1]);
//     console.log(typeof {name: 'John', age: 34});
//     console.log(typeof new Date());
//     console.log(typeof function (){});
//     console.log(typeof myCar);
//     console.log(typeof null);


//     console.log("John".constructor);
//     console.log((3.14).constructor);
//     console.log(NaN.constructor);
//     console.log(false.constructor);
//     console.log([1].constructor);
//     console.log({name: 'John', age: 34}.constructor);
//     console.log(new Date().constructor);
//     console.log(function (){}.constructor);
// //    console.log(myCar.constructor);
// //    console.log(null.constructor);



//const fruits = ["Banana", "Apple", "Mango", "Guava"];
//const fruits = "jdfhsjdhfjksadhjkfh";
// const fruits = new Date();
// console.log(isArray(fruits));

// function isArray(myArray) {
// //    return myArray.constructor.toString().indexOf("Array") > -1;
//     return myArray.constructor === Date;
// }

// //let dkfkd = undefined;
// let dkfkd = "";
// console.log(typeof dkfkd);

// let person = {firstName: "John", lastName: "Doe", age:50, eyeColor: "blue"};
// //person = null;
// person = undefined;
// console.log(typeof person);


// const var1 =undefined;
// const var2 = null;

// console.log(typeof var1 + "\n" + typeof var2);
// console.log(var1 === var2); //undefined === object
// console.log(var1 == var2); //undefined == object or null == null

// // function myFunction(var11) {
// //     return var11.constructor === undefined;
// // }

// const  cars = ["Saab", "Volvo", "Audi", "BMW"];

// console.log(cars instanceof Array);
// console.log(cars instanceof Object);
// console.log(cars instanceof String);
// console.log(cars instanceof Number);


// console.log(Number("3.14"));
// console.log(Number(Math.PI));
// console.log(Number(" "));
// console.log(Number(""));
// console.log(Number("3 14"));
// console.log(Number("John"));

// let x = 123;
// console.log(String(x));
// console.log(Number(123));
// console.log(Number(100+23));

// console.log(x.toString());
// console.log((123).toString());
// console.log((100+23).toString());


// let d = new Date();
// console.log(Number(d));
// console.log(d.getTime());

// let dd = new Date();
// console.log(String(dd));
// console.log(dd.toString());



// console.log(Number(false));
// console.log(Number(true));

// console.log(String(false));
// console.log(String(true));

// console.log(false.toString());
// console.log(true.toString());



// console.log(5 + null);
// console.log("5" + null);
// console.log("5" + 2);
// console.log("5" - 2);
// console.log("5" * "2");


// let x = 5 & 1;
// console.log(x);

// let y = 5 | 1;
// console.log(y);

// let z = 5 ^ 1;
// console.log(z);

// let a = ~5;
// console.log(a);


// let b = 5 << 1;
// console.log(b);

// let c = -5 >> 1;
// console.log(c);

// let d = 5 >>> 1;
// console.log(d);


// function dec2bin(dec) {
//     return (dec >>> 0).toString(2);
// }
// console.log("Converting Decimal to Binary: " + dec2bin(5));


// function bin2dec(bin) {
//     return parseInt(bin, 2).toString(10);
// }
// console.log("Converting Binary to Decimal: " + bin2dec(10));


let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);
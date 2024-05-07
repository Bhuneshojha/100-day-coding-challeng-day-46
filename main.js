"use strict";
//          100 days of coding challenge ( DAY 45 )
Object.defineProperty(exports, "__esModule", { value: true });
// Question 01 
// --Defines a JavaScript object 
let person = {
    name: "Vishal",
    age: 23,
    city: "Jaipur"
};
// ----Converts the object into a JSON string
console.log(person); // Outputs: {"name":"Alice","age":30,"city":"Wonderland"}
// --Demonstrates converting an object to a JSON string, making it easy to store or transmit.
// Question 02
// --Defines a JSON string
const jsonString = '{"name":"vishal","age":30,"city":"Udaipur"}';
// --Parses the JSON string back into a JavaScript object
const person2 = JSON.parse(jsonString);
console.log(person2); // Outputs the original object
// --This snippet shows how to take a JSON string and convert it back into a JavaScript object.
// Question 03 
// Reusing the person object from Question 133
const person3 = {
    name: "Teru",
    age: 30,
    city: "Mithi",
};
// --Converts the object into a JSON string with indentation
const jsonStrin = JSON.stringify(person, null, 2);
console.log(jsonString);
// --Shows how adding indentation to the JSON string makes it easier to read.

// Here, if condition has been used.
//Q1 Soln

let color="green";

// Traffic Light System

if(color === "red") {
    console.log("Stop! Light color is, Red");
}

if(color === "yellow") {
    console.log("Slow down. Light color is, Yellow");
}

if(color === "green") {
    console.log("Go! Light color is, Green");
}

//Q2 Soln

let size = "s";

if(size === "xl") {
    console.log("Price is ₨.250");
} else if(size === "l") {
    console.log("Price is ₨.200");
} else if(size === "m") {
    console.log("Price is ₨.100");
} else {
    console.log("Price is ₨.50");
}

// additional question

let marks = "45";

if(marks === "45") {
    console.log("You've passed!");
    if(marks >= 60) {
        console.log("Grade : O");
    }
    else {
        console.log("Grade : A");
    }
} else{
    console.log("Better luck next time.");
}

// Q3 soln

let str="avvy";

if(str[0] === "a" && str.length>3) {
    console.log("Good string");
}
else{
    console.log("Bad string");
}

// Switch-stt's:

let trafficColor = "green";

switch (trafficColor) {
    case "red":
    console.log("Stop!");
    break;
    case "yellow":
    console.log("Slow down!");
    break;
    case "green":
    console.log("Go!");
    break;
    default:
    console.log("Light is broken!");
}

// Switch question-01
// Days in a week!


let day = "1";

switch (day) {
    case "1":
        console.log("Monday");
        break;
    case "2":
        console.log("Tuesday");
        break;   
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day!");
}

// // Alert:
// alert("Hey you!");

// // Prompt:

// let Fname = prompt("Enter your name!");
// console.log(Fname);


// First name n Last name with alert!

let firstName = prompt("Enter your first name");
let lastName = prompt("Enter your last name");

let msg = "Welcome " + firstName + " " + lastName + "!";
alert(msg);
//str.trim()

let trs = "    Hey There    ";
console.log(trs.trim());

//str.toUpperCase()

let you = "youuu"
console.log(you.toUpperCase());

//str.toLowerCase()

let you1 = "AYESSHHH"
console.log(you1.toLowerCase());

//indexOf()

let str = "Ayesha Quazi!";
console.log(str.indexOf("p"));

// method chaining
let str1 = "HeyA!";
let new2 = str1.trim().toLowerCase();
console.log(new2);

// slice indexing

let cut = "sliceThisIfYouCan";
console.log(cut.slice(5, 10));
// NOTE: 8 index is mentioned here but it'll come it the 7th index only!
// NOTE2: we can also add -ve num to it, so it'll delete the the whole words (length - the -ve num) we've added to it.

console.log(cut.slice(-3));
// this number actually came 13, n the whole word was 16. So, the last words got printed in the console part, 'Can'.

// replace

let stuff = "newStuffnewStuffNew";
console.log(stuff.replace("Stuff", "Things"));
// NOTE: Only the 1st occurence changes. 

// repeat

let repeat1 = "AysaQ ";
console.log(repeat1.repeat(2));

// arrays

// let student0 = "Ayesha";
// let student1 = "Afifa";
// let student2 = "Anaya";
// let student3 = "Mahnoor";

let students = ["Ayesha", "Afifa", "Anaya", "Mahnoor"];
// These can be called by their index numbers. students[0] op: 'Ayesha'
// 2. students[0] [0] : This means you want to exlpore the 0th index's 0th place/word in this case. op: 'A' "multi-tasking"

let info = ["She", 20, 89.0];
// These are called as Mixed Arrays, only possible in JS. 

let emptyArr = [];
// This is an empty array.

// Array Methods: 

let cars = ["xuv", "bmw", "audi", "alto"];

// 1. push, ferrari added .push("xyz");

// 2. pop, .pop(); the last car added is now deleted.

// 3. unshift, .unshift("xyz"); comes at the start of the linear line.

// 4. shift, .shift(); the last car added is now deleted.

// .concat👇🏻
let color1 = ['white', 'pink'];
let color2 = ['silver', 'gold'];






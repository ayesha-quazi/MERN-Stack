console.log('Basic syntax used');

for (let i=0; i<=5; i++){
    console.log(i);
}

let i=5;
console.log(i);
// used to concise the matter in a few lines of code. 
// variables in 'for loop': if we run this code 'console.log(i);', it'll through us an error. So, here we would 1st have to declare (i) before calling it to print. 

// Odd num till 15.

console.log('Odd num till 9');

for (let j=1; j<=9; j=j+2) {
    console.log(j);
}

// Even num till 20. 

console.log('Even num till 8');

for (let k=2; k<=8; k=k+2) {
    console.log(k);
}

console.log('backwards');

for (let i=10; i>=2; i=i-2) {
    console.log(i);
}

// multi of num 5
console.log('Mul of num=5');

for (let i=5; i<=30; i= i+5) {
    console.log(i);
}

// prompt for tables. 

// console.log('tables');

// let n = prompt("Enter any number of your choice!");
// n = parseInt(n);

// for(let i=n; i<=n*10; i=i+n) {
//     console.log(i);
// }

// Nested Loops

console.log('Nested Loops:'); 

for (let i=1; i<=3; i++) {
    console.log(`Outer loop ${i}`);
    for (let j=1; j<=2; j++){
        console.log(j);
    }
}

// while loops
console.log('While Loops:'); 

let k=1;
while(k<=5); {
    console.log(k);
    k++;
}

// break keyword
console.log('break keyword'); 

let j=0; 
while(j<=5) {
    if(j == 3) {
        break;
    }
    console.log(j);
    j++;
}

console.log("We've used break keyword @3.")

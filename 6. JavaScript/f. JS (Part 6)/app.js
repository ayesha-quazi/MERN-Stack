function hey() {
    console.log("Hey Ayesha!");
} //this is simple making of functn.

hey(); // this is calling of functn, which is very imp if you want to see it executed.

function college() {
    console.log("Apna College");
}

college();

// we can use loop statements n if-else statements too

function print1To5() {
    for(let i=1; i<=5; i++){
    console.log(i); 
}
}

print1To5();


function printPoem() {
    console.log("Twinkle twinkle little star,");
    console.log("how I wonder what you are, up above the world so high like a diamond in the sky.");
}

printPoem();

function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}

rollDice();

function checkInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}

checkInfo("Ayesha", 20);

function calcAvg(a, b, c) {
    avg= (a+b+c)/3
    console.log(avg);
}

calcAvg(20,18,10);

//Methods: using commas we can use many methods at the same tym.

const calculator = {
    add: function(a, b){
        return a + b;
    },
    sub: function(a, b){
        return a - b;
    },
    mul: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    }
};


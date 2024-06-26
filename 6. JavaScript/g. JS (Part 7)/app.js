const student = {
    name: "Ayesha",
    age: 20,
    eng: 95,
    math:89,
    cs:97,
    getAvg(){
            let avg = (this.eng + this.math + this.cs) / 3;
        console.log(`$(this.name) got avg marks = $(avg)`);
    }
}

// TRY N CATCH: when u have doubt abt any variable. 

console.log("Hey!");
//let a = 5;
try{
    console.log(a);    
} catch {
    console.log("error has been caught!");    
}
console.log("Hey!!");


// [=>], (are imp, inke bina error aainga, only for a single value it can work. )

    const sum = (a, b) => { console.log(a+b);
    };

// Implicit return: func converts into single line.

// setTimeout: 

console.log("Hi there!");

setTimeout(() => {
   console.log("Ayesha Quazi.");    
}, 2000);

console.log("Welcome, ");

//setInterval: runs again, to stop it clearInterval(id), we can store the task's ID n with this func, it'll stop executing a&again. 
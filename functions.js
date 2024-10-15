// Task 1: 
function printCurrentTime() {
    const currentTime = new Date();
    return currentTime.toLocaleTimeString();
}

console.log(printCurrentTime());

// Task 2: 
function myName() {
    const myName = "Jenny";
    console.log(myName);
}

myName()
myName()

// Task 3:
function printGreeting(name) {
    const printGreeting = "Hello " + name;
    console.log(printGreeting);
}

printGreeting("Sue");

// Task 4: 
function multiply(num1, num2) {
    const num3 = num1 * num2;
    console.log(num3)
}

multiply(2, 2);

// Task 5: 
function warmEnough(temperature) {
    return temperature > 10;
}

if (warmEnough(15)) {
    console.log("Go for a run!");
}




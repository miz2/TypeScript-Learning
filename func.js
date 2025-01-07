"use strict";
function greet(name) {
    console.log("Hello" + name);
}
greet("Hi Pgal");
function sum(a, b) {
    return a + b;
}
console.log(sum(20, 34));
function isLegal(age) {
    if (age > 18) {
        console.log("Is legal ");
    }
    else {
        console.log("Not legal");
    }
}
// function taking another input 
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
delayedCall(function () {
    console.log("Delayed function");
});

"use strict";

let frogweight = +prompt("How much does a frog weight");  // Wheight is grams 

let frogs = +prompt("How many frogs do you have?");

const KILOS = 1000;

function frogstotalweight(frogweight, frogs){
    return frogweight * frogs / KILOS >=
    5;
}

if (frogstotalweight(frogweight, frogs)){
alert("There is enough frogs for studying");
} else {
alert("There is not enough frogs for studying");
}
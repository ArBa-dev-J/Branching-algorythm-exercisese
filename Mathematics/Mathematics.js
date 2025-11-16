"use strict";

// VARIABLES

let grades = [
    +prompt("Write a grade in numbers. From 1 to 10"),
    +prompt("Write a grade in numbers. From 1 to 10"),
    +prompt("Write a grade in numbers. From 1 to 10"),
    +prompt("Write a grade in numbers. From 1 to 10"),
    +prompt("Write a grade in numbers. From 1 to 10")
];


// COPIED FROM STACKOVERFLOW

function getAvg(grades) {
    if (grades.length === 0) return 'Empty grades array';
    return grades.reduce((acc, c) => acc + c, 0) / grades.length;
}

//------------------------------------------------------------------

if (getAvg(grades) > 9) {
    alert("You get three candies");
} else if (getAvg(grades) >= 7 && getAvg(grades) < 9) {
    alert("You get two candies");
} else {
    alert("You get one candy");
}

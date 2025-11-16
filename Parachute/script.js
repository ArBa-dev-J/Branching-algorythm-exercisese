"use strict";

const FREEFALL = 9.8; /* m / s2 */

let height =
    +prompt("Write a height in meters"); //  in meters

let parachuterealese =
    +prompt("Write in how many seconds will the parachute realese");
// In seconds 



function willparachuterealese(FREEFALL, height, parachuterealese) {
    if (height && parachuterealese == 0) return false;
    
    return (Math.sqrt(2 * height / FREEFALL) 
    > (parachuterealese));
}


if (willparachuterealese(FREEFALL, height, parachuterealese)){
    alert("Parachute will realese in time");
} else {
    alert("Parachute will not realese in time");
}
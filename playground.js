/**
 * Created by kevin on 16/7/21.
 */
let firstName = "John";
let lastName = "Lindquist";

let person = {firstName, lastName};

console.log(person);

let mascot = "Moose";

let team = {person, mascot};

console.log(team);




var color = "red";
var speed = 10;
var drive = "go";

var car = {
    color,
    speed,
    [drive]: function() {
        console.log("vroom");
    }
    // go() {
    //     console.log("vroom1");
    // }
};

console.log(car.color);
console.log(car.speed);

car.go();



let first = [1,2,3];
let second = [4,5,6];

function addThreeThings(a,b,c){
    let result = a + b + c;
    console.log(result);
}

addThreeThings(...first);
addThreeThings(...second);



var salutation = "Hello";
var greeting = `
${salutation},
    You 
        Crazy World
        
    Are 
    U

`;

console.log(greeting);

var x =1;
var y = 2;

var equation = `${x} + ${y} = ${x+y}`;

console.log(equation);





function tag(strings, ...values) {
    if(values[0] < 20) {
        values[1] = "awake";
    }
    return `${strings[0]}${values[0]}${strings[1]}${values[1]}`
}

var message = tag`It's ${new Date().getHours()} I'm ${""}`;

console.log(message);




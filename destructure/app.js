/**
 * Created by kevin on 16/7/21.
 */
var {color, position} = {
    color: "blue",
    name: "John",
    state: "New York",
    position: "Forward"
};

console.log(color, position);


function generateObj() {
    return {
        color: "blue",
        name: "John",
        state: "New York",
        position: "Forward"
    }
}

var {name:firstName, state: location} = generateObj();
console.log(firstName);
console.log(location);


var [first,,,,fifth] = ["red", "yellow", "green", "blue", "orange"];

console.log(first);
console.log(fifth);


var people = [
    {
        "firstName": "Clinton",
        "lastName": "Ruiz",
        "phone": "1-403-985-0449",
        "email": "pharetra@facilisislorem.org",
        "address": "Ap #829-3443 Nec St."
    },
    {
        "firstName": "Skyler",
        "lastName": "Carroll",
        "phone": "1-429-754-5027",
        "email": "Cras.vehicula.aliquet@diamProin.ca",
        "address": "P.O. Box 171,  1135 Feugiat St."
    },
    {
        "firstName": "Kylynn",
        "lastName": "Madden",
        "phone": "1-637-181-4501",
        "email": "rutrum@Nullamlobortis.net",
        "address": "P.O. Box 342, 9574 Egestas Street"
    }
];

people.forEach(({firstName}) => console.log(firstName));

var [,Skyler] = people;

function logEmail({email}) {
    console.log(email);
}

logEmail(Skyler);
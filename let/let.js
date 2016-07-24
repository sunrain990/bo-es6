/**
 * Created by kevin on 16/7/20.
 */
var message = "hi";

{
    var message = "bye";
}

console.log(message);


var fs = [];

// for(var i = 0; i < 10; i++) {
for(let i = 0; i < 10; i++) {
    fs.push(function() {
        console.log(i);
    })
}

fs.forEach(function(f) {
    f();
});


function varFunc() {
    var previous = 0;
    var current = 1;
    var i;
    var temp;

    for(i = 0; i < n; i += 1) {
        temp = previous;
        previous = current;
        current = temp + current;
    }
}

function letFunc() {
    let previous = 0;
    let current = 1;

    for(let i = 0; i < n; i += 1) {
        let temp = previous;
        previous = current;
        current = temp + current;
    }
}
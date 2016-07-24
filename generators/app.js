/**
 * Created by kevin on 16/7/21.
 */
function *greet(){
    let friendly = yield "How";
    friendly = yield  friendly + "are";
    yield friendly + "you?";
}

var greeter = greet();
console.log(greeter.next().value);
console.log(greeter.next(" the heck ").value);
console.log(greeter.next(" silly ol '").value);

for (let word of greeter) {
    console.log(word);
}


function *graph() {
    let x = 0;
    let y = 0;
    while(true) {
        yield {x:x, y:y}
        x += 2;
        y += 1;
    }
}

var graphGenerator = graph();
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
console.log(graphGenerator.next().value);
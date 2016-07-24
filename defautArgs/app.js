/**
 * Created by kevin on 16/7/20.
 */
function greet(greeting, name = "John"){
    console.log(greeting + ", " + name);
}

greet("Hello", "Bill");


let receive = (complete = ()=>console.log("complete")) =>complete();

function receive1(complete){
    complete();
}
receive1(function(){
    console.log("complete1");
})

receive();
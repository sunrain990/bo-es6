/**
 * Created by kevin on 16/7/20.
 */
var createGreeting = function(message, name){
    return message + name;
}

var arrowGreeting1 = (message, name) => message + name;

var squared = x => x * x;



var deliveryBoy = {
    name: "John",

    handleMessage: function(message, handler) {
        handler(message);
    },

    receive: function() {
        this.handleMessage("Hello, ", message => console.log(message + this.name))
    }
}

deliveryBoy.receive();

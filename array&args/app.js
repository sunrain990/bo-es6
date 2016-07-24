/**
 * Created by kevin on 16/7/21.
 */
function Store() {
    var aisle = {
        fruit: [],
        vegetable: []
    };
    return {
        add: function(category, ...items) {
            // var items = [].splice.call(arguments, 1);
            console.log(items);
            items.forEach(function(value, index, array){
                aisle[category].push(value);
            });
        },
        aisle: aisle
    }
}

var myGroceryStore = new Store();

myGroceryStore.add('fruit', 'apples', 'oranges');
console.log(myGroceryStore.aisle);
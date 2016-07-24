/**
 * Created by kevin on 16/7/21.
 */
var myMap = new Map();
/*
set()
get()
size
clear()
has()
delete();
 */


myMap.set('foo', 'bar');
myMap.set('hello', 'world');
// myMap.delete('foo')

console.log(myMap.size);
// myMap.clear();

/*
Iterators
keys()
entries()
values()
 */

for(var key of myMap.keys()) {
    console.log(key);
}

for(var [key, value] of myMap.entries()) {
    console.log(key + ' = ' + value);
}
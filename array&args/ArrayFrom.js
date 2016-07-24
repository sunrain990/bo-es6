/**
 * Created by kevin on 16/7/21.
 */
const products =
    // Array Like collections
    Array.from(document.querySelectorAll('.product'));

products
    .filter(product => parseFloat(product.innerHTML))
    .forEach(product => product.style.color = 'red');

console.log(products);
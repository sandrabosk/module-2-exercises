// 1: What would be expected outputs and why?

// a:
const [a, b] = [1];
console.log(a * b); // <== ???

// b:
const [a, b = 1] = [2];
console.log(a * b); // <== ???

// b:
let [a, b = 2, c, d = 1] = [3, 4];
console.log(a, b, c, d); // ==> ???

// ************************************************************************************************

// 2: Given the object, use function parameter destructuring to get the following output:

const greenSmoothie = {
  leaf: 'spinach',
  veggie: 'bok choy',
  seed: 'ground flex seeds',
  nut: 'peanut',
  liquid: 'almond milk'
};

function getIngredients(/* your code here */) {
  return `To make the green smoothie,  you  should add: ______, ______, ______, ______ and ______.`;
}

getIngredients(/* your code here */);
// => expected: // To make a green smoothie, you should add: spinach, bok choy, ground flex seeds, peanut and almond milk.

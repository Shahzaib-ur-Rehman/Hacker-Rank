//need best solution for this problem

const array = [1, 2, 2, 2, 3, 4, 4, 4, 2, 2, 4, 3, 2];
const requiredCounter = {};
const display = () => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      requiredCounter[array[i]] = (requiredCounter[array[i]] || 0) + 1;
    }
  }
  return requiredCounter;
};
console.log(display());

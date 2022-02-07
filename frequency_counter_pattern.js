//using 2 loops (O(n^2) )
const naiveSolution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

console.log(naiveSolution([1, 2, 3], [4, 1, 9]));

//using frequency counter pattern (O(n))
const refecteredSolution = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let i = 0; i < arr1.length; i++) {
    frequencyCounter1[arr1[i]] = (frequencyCounter1[arr1[i]] || 0) + 1;
  }

  for (let i = 0; i < arr2.length; i++) {
    frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
};

console.log(refecteredSolution([1, 1, 3], [1, 1, 9]));

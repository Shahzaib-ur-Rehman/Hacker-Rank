//solution by me
const validAnagram = (str1, str2) => {
  const array1 = str1.split("");
  const array2 = str2.split("");
  for (let index = 0; index < array1.length; index++) {
    const requiredIndex = array2.indexOf(array1[index]);
    if (requiredIndex !== -1) {
      array2.splice(requiredIndex, 1);
    }
  }
  if (array2.length === 0) {
    return true;
  } else {
    return false;
  }
};

console.log(validAnagram("texttwisttime", "timetwisttext"));

//solution from stack overflow
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g).split("").sort().join();
}

console.log(anagrams("texttwisttime", "timetwisttext"));

//refectared solution compexity O(n)

const refectaredSolution = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }
  const lookup = {};
  for (let index = 0; index < string1.length; index++) {
    lookup[string1[index]]
      ? (lookup[string1[index]] += 1)
      : (lookup[string1[index]] = 1);
  }

  for (let index = 0; index < string2.length; index++) {
    if (!lookup[string2[index]]) {
      return false;
    } else {
      lookup[string2[index]] -= 1;
    }
  }
  return true;
};

console.log(refectaredSolution("texttwisttime", "timetwisttext"));

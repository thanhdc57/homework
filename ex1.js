
// exercise 1
const findDiffAndSameValue = (array1, array2) => {
  let result = {};
  // filter array1 if the array2 contains value of array1
  let same = removeWhiteSpace(array1).filter((value) => array2.includes(value));
  // make values distinct
  let sameUnique = [];
  for (item of same) {
    if (!sameUnique.includes(item)) {
      sameUnique.push(item);
    }
  }
  // combine array1 and array2 and filter with the same array
  let diff = removeWhiteSpace(array1.concat(array2)).filter(
    (value) => !same.includes(value)
  );
  // make values distinct
  let diffUnique = [];
  for (i of diff) {
    if (!diffUnique.includes(i)) {
      diffUnique.push(i);
    }
  }
  // add to object
  result["different"] = diffUnique.sort();
  result["same"] = sameUnique.sort();
  return JSON.stringify(result);
};

const removeWhiteSpace = (array) => {
  return array.map((value) => {
    // check value if it string type
    if (typeof value === "string") {
      // check value if it not an empty string
      if (value.length != 0) {
        // check value if when it trim() it return empty string or string has length
        if (value.trim().length == 0) {
          // if it is empty string then add 1 white space
          return value.replace(/\s\s+/g, " ");
        } else {
          // if it not empty then trim it and return
          return value.trim();
        }
      }
      return value;
    }
    return value;
  });
};

//test 1
const arr1Test1 = [1, 2, 3, 4, 5, "", "  b  ", "9"];
const arr2Test1 = ["a", 2, 3, 8, "b", 9];

//test 2
const arr1Test2 = [];
const arr2Test2 = [];

//test 3
const arr1Test3 = ["", "          ", "!", "@#$"];
const arr2Test3 = ["", " ", "!", 2];

console.log(findDiffAndSameValue(arr1Test1, arr2Test1));
console.log(findDiffAndSameValue(arr1Test2, arr2Test2));
console.log(findDiffAndSameValue(arr1Test3, arr2Test3));

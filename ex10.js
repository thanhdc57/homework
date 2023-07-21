// exercise 1
const findDiffAndSameValue = (array1 = [], array2 = []) => {
  let result = { input: {}, output: {} };
  result["input"]["array1"] = array1;
  result["input"]["array2"] = array2;
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
  result["output"]["different"] = diffUnique.sort();
  result["output"]["same"] = sameUnique.sort();
  return result;
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
// end exercise 1

// exercise 2
const uppercaseFirst = (stringToUppercase) => {
  let result = {};
  result["input"] = stringToUppercase;
  // trim() to remove whitespace at the beginning and end of the string
  let string = stringToUppercase.trim();
  // make an array to store the words from a string
  let words = string.split(" ");
  let uppercasedWords = words.map(
    // with every word uppercase first Char and add remain Char of the word
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  result["output"] = uppercasedWords.join(" ");
  return result;
};
// end exercies 2

// exercise 3
const isOddOrEven = (array) => {
  let result = {};
  result["input"] = array;
  let sum = 0;
  // sum plus all the elements of array
  for (value of array) {
    sum += value;
  }
  result["output"] = sum % 2 === 0 ? "even" : "odd";
  return result;
};
// end exercise 3

// exercise 4
const lots_of_math = (a, b, c, d) => {
  // sum of a and b
  let sum = a + b;
  // difference between c and d
  let minus = c - d;
  // product of (a+b) and (c-d)
  let product = sum * minus;
  // modulo of product with a
  let modulo = product % a;
  let result = {
    input: {
      a: a,
      b: b,
      c: c,
      d: d,
    },
    output: {
      sum_of_a_and_b: sum,
      minus_of_c_with_d: minus,
      product_of_first_and_second_printed: product,
      modulo_of_third_printed_with_a: modulo,
    },
  };
  return result;
};
// end exercise 4

// exercise 5
const getMiddle = (w) => {
  let result = {};
  result["input"] = w;
  let word = w.trim();
  let middleIndex = Math.floor(word.length / 2);
  if (word.length % 2 == 1) {
    result["output"] = word[middleIndex];
  } else {
    result["output"] = word[middleIndex - 1] + word[middleIndex];
  }
  return result;
};
// end exercise 5

//exercise 6
const highestNumber = (number) => {
  let result = {};
  result["input"] = number;
  // make an array from the number
  let arrayNum = String(number).split("");
  // sort the array descending order
  let sortedArrayNum = arrayNum.sort((a, b) => b - a);
  // join the elements of the array into a string and convert to number
  result["output"] = Number(sortedArrayNum.join(""));
  return result;
};
// end exercise 6

//exercise 7
const unique_in_order = (seq) => {
  let resultObj = {};
  resultObj["input"] = seq;
  let result = [];
  // prev is the previous element of seq
  let prev = null;
  for (item of seq) {
    // compare previous element with current element if different then push value into result array
    if (prev !== item) {
      result.push(item);
    }
    // update previous element with new value
    prev = item;
  }
  resultObj["output"] = result;
  return resultObj;
};
// end exercise 7

//exercise 8
const findOutlier = (arrayNum) => {
  let result = {};
  result["input"] = arrayNum;
  // check if the first element is even or odd
  let firstCheck = arrayNum[0] % 2 === 0;
  // check if the second element is even or odd
  let secondCheck = arrayNum[1] % 2 === 0;
  // if the first and second elements are not all even or odd
  if (firstCheck !== secondCheck) {
    // check the third element with second element if it return true then the first element is outlier and vice versa
    let thirdCheck = arrayNum[2] % 2 === 0;
    result["output"] = thirdCheck === secondCheck ? arrayNum[0] : arrayNum[1];
  } else {
    // check remain elements with and find the outlier
    for (let i = 2; i < arrayNum.length; i++) {
      let target = arrayNum[i] % 2 === 0;
      if (target !== firstCheck) {
        result["output"] = arrayNum[i];
      }
    }
  }
  return result;
};
// end exercise 8

// write all to result to file exercise10.json
let data = {
  exercise_01: findDiffAndSameValue(
    ["3", 5, 4, 3, 2, "", "     "],
    ["avd", 2, 3, 3, 1, " "]
  ),
  exercise_02: uppercaseFirst("    nguyen tuan thanh    "),
  exercise_03: isOddOrEven([0, -1, -5]),
  exercise_04: lots_of_math(7, 2, 3, 13),
  exercise_05: getMiddle("test"),
  exercise_06: highestNumber(123456789),
  exercise_07: unique_in_order("AAAABBBCCDAABBB"),
  exercise_08: findOutlier([8, 2, 11, 100, 4, 8, 2602, 36]),
};

const fs = require("fs");
let stringData = JSON.stringify(data);

fs.writeFile("exercise10.json", stringData, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

// exercise 1
const findDiffAndSameValue = (array1 = [], array2 = []) => {
  let result = { input: {}, output: {} };
  result["input"]["array1"] = array1;
  result["input"]["array2"] = array2;
  let same = array1.filter((value) => array2.includes(value));
  let sameUnique = [];
  for (i of same) {
    if (!sameUnique.includes(i)) {
      sameUnique.push(i);
    }
  }
  let diff = array1.concat(array2).filter((value) => !same.includes(value));
  let diffUnique = [];
  for (i of diff) {
    if (!diffUnique.includes(i)) {
      diffUnique.push(i);
    }
  }
  result["output"]["different"] = diffUnique;
  result["output"]["same"] = sameUnique;
  return JSON.stringify(result);
};

// exercise 2
const uppercaseFirst = (stringToUppercase) => {
  let result = {};
  result["input"] = stringToUppercase;
  let words = stringToUppercase.split(" ");
  let uppercasedWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );
  result["output"] = uppercasedWords.join(" ");
  return JSON.stringify(result);
};

// exercise 3
const isOddOrEven = (array) => {
  let result = {};
  result["input"] = array;
  let sum = 0;
  for (i of array) {
    sum += i;
  }
  result["output"] = sum % 2 === 0 ? "even" : "odd";
  return JSON.stringify(result);
};

// exercise 4
const lots_of_math = (a, b, c, d) => {
  let sum = a + b;
  let minus = c - d;
  let product = sum * minus;
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
      modulo_of_third_printed_with_a: product % a,
    },
  };
  return JSON.stringify(result);
};

// exercise 5
const getMiddle = (word) => {
  let result = {};
  result["input"] = word;
  let middleIndex = Math.floor(word.length / 2);
  if (word.length % 2 == 1) {
    result["output"] = word[middleIndex];
  } else {
    result["output"] = word[middleIndex - 1] + word[middleIndex];
  }
  return JSON.stringify(result);
};

//exercise 6
const highestNumber = (number) => {
  let result = {};
  result["input"] = number;
  let stringNum = String(number).split("");
  let arrayNum = stringNum.map((num) => Number(num));
  let sortedArrayNum = arrayNum.sort((a, b) => b - a);
  result["output"] = Number(sortedArrayNum.join(""));
  return JSON.stringify(result);
};

//exercise 7
const unique_in_order = (seq) => {
  let resultObj = {};
  resultObj["input"] = seq;
  let result = [];
  let prev = null;
  for (item of seq) {
    if (prev !== item) {
      result.push(item);
    }
    prev = item;
  }
  resultObj["output"] = result;
  return JSON.stringify(resultObj);
};

//exercise 8
const findOutlier = (arrayNum) => {
  let result = {};
  result["input"] = arrayNum;
  let firstCheck = arrayNum[0] % 2 === 0;
  let secondCheck = arrayNum[1] % 2 === 0;
  if (firstCheck !== secondCheck) {
    let thirdCheck = arrayNum[2] % 2 === 0;
    result["output"] = thirdCheck === secondCheck ? arrayNum[0] : arrayNum[1];
  } else {
    for (let i = 2; i < arrayNum.length; i++) {
      let target = arrayNum[i] % 2 === 0;
      if (target !== firstCheck) {
        result["output"] = arrayNum[i];
      }
    }
  }
  return JSON.stringify(result);
};

//exercise 9
const countFreq = (string) => {
  string = string.split(" ").join("");
  let result = {};
  for (i of string) {
    if (!result[i]) {
      result[i] = 1;
    } else {
      result[i] += 1;
    }
  }
  return result;
};

// test exercise 9
console.log(countFreq("aaabereaaaddd"));

// write all to result to file exercise10.json
let data = {
  exercise_01: JSON.parse(
    findDiffAndSameValue(["3", 3, 3, 3, 3, 4, 4, 4], ["avd", 1, 3, 3])
  ),
  exercise_02: JSON.parse(uppercaseFirst("nguyen tuan thanh")),
  exercise_03: JSON.parse(isOddOrEven([0, -1, -5])),
  exercise_04: JSON.parse(lots_of_math(7, 2, 3, 13)),
  exercise_05: JSON.parse(getMiddle("test")),
  exercise_06: JSON.parse(highestNumber(123456789)),
  exercise_07: JSON.parse(unique_in_order("AAAABBBCCDAABBB")),
  exercise_08: JSON.parse(findOutlier([8, 2, 11, 100, 4, 8, 2602, 36])),
};
const fs = require("fs");
let stringData = JSON.stringify(data);

fs.writeFile("exercise10.json", stringData, (err) => {
  if (err) throw err;
  console.log("Data written to file");
});

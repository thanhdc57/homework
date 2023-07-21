//exercise 9
const countFreq = (string) => {
  // remove whitespace
  string = string.split(" ").join("");
  let result = {};
  for (i of string) {
    if (!result[i]) {
      result[i] = 1;
    } else {
      result[i] += 1;
    }
  }
  let sortedResult = sortObjectByKey(result);
  return sortedResult;
};

let sortObjectByKey = (obj = {}) => {
  let keys = [];
  let sorted_obj = {};
  // push the key of obj to a new array
  for (let key in obj) {
    keys.push(key);
  }
  // sort keys
  keys.sort();
  // create new array based on Sorted Keys
  keys.forEach((key) => (sorted_obj[key] = obj[key]));

  return sorted_obj;
};

// test 1
const string1 = "hello world";

// test 2
const string2 = "  ccc  baaaabbcc aaccb    ";

//test 3
const string3 = "!@#$  !@#$!@# cbacbabbc";

console.log(countFreq(string1));
console.log(countFreq(string2));
console.log(countFreq(string3));

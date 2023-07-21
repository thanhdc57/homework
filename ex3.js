// exercise 3
const isOddOrEven = (array) => {
    let sum = 0;
    // sum plus all the elements of array 
    for (value of array) {
      sum += value;
    }
    let result = sum % 2 === 0 ? "even" : "odd";
    return result;
  };


  // test 1
  const array1 = [2,2,4,6]
  // test 2
  const array2 = [1,2,3,3]

console.log(isOddOrEven(array1))

console.log(isOddOrEven(array2))

//exercise 6
const highestNumber = (number) => {
    // make an array from the number 
    let arrayNum = String(number).split("");
    // sort the array descending order
    let sortedArrayNum = arrayNum.sort((a, b) => b - a);
    // join the elements of the array into a string and convert to number
    let result = Number(sortedArrayNum.join(""));
    return result;
  };


  // test 1
  const number1 = 123456789

  // test 2
  const number2 = 442459512

  console.log(highestNumber(number1));
  console.log(highestNumber(number2));


//exercise 8
const findOutlier = (arrayNum) => {
    let result =0
    // check if the first element is even or odd
    let firstCheck = arrayNum[0] % 2 === 0;
     // check if the second element is even or odd
    let secondCheck = arrayNum[1] % 2 === 0;
    // if the first and second elements are not all even or odd 
    if (firstCheck !== secondCheck) {
        // check the third element with second element if it return true then the first element is outlier and vice versa
      let thirdCheck = arrayNum[2] % 2 === 0; 
      result = (thirdCheck === secondCheck) ? arrayNum[0] : arrayNum[1];
    } else {
        // check remain elements with and find the outlier
      for (let i = 2; i < arrayNum.length; i++) {
        let target = arrayNum[i] % 2 === 0;
        if (target !== firstCheck) {
          result = arrayNum[i];
        }
      }
    }
    return result;
  };


// test 1
const array1 = [2, 4, 0, 100, 4, 11, 2602, 36]

// test 2
const array2 = [160, 3, 1719, 19, 11, 13, -21]

console.log(findOutlier(array1))
console.log(findOutlier(array2))
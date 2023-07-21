//exercise 7
const unique_in_order = (seq) => {
    let result = [];
    let prev = null;
    // prev is the previous element of seq 
    for (item of seq) { 
        // compare previous element with current element if different then push value into result array
      if (prev !== item) {
        result.push(item);
      }
      // update previous element with new value
      prev = item;
    }
    return result;
    
  };

// test 1
const seq1 = 'AAAABBBCCDAABBB'

// test 2
const seq2 = 'ABBCcAD'

// test 3
const seq3 = [1, 2, 2, 3, 3]

// test 4
const seq4 = [1, 2, 2, 3, 3,"2","2","abc"]

console.log(unique_in_order(seq1))
console.log(unique_in_order(seq2))
console.log(unique_in_order(seq3))
console.log(unique_in_order(seq4))
const getMiddle = (w) => {
    let word = w.trim()
    let middleIndex = Math.floor(word.length / 2);
    if (word.length % 2 == 1) {
      return word[middleIndex];
    } else {
      return word[middleIndex - 1] + word[middleIndex];
    }
  };

  // test 1
  const word1 = "  testing  "

  // test 2
  const word2 = "test"

  // test 3
  const word3 ="A"

  console.log(getMiddle(word1));
  console.log(getMiddle(word2));
  console.log(getMiddle(word3));
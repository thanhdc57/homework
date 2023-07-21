// exercise 2
const uppercaseFirst = (stringToUppercase ="") => {
    // trim() to remove whitespace at the beginning and end of the string
    let string = stringToUppercase.trim()
    // make an array to store the words from a string
    let words = string.split(" ");
    let uppercasedWords = words.map(
        // with every word uppercase first Char and add remain Char of the word
      (word) => word[0].toUpperCase() + word.slice(1)
    );
    return uppercasedWords.join(" ")
  };
  

  // test 1
  const string1 = "!ten toi la"
  // test 2
  const string2 = "   ten toi la   "
  console.log(uppercaseFirst(string1)) 
  console.log(uppercaseFirst(string2)) 
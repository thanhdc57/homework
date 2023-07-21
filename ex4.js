// exercise 4
const lots_of_math = (a, b, c, d) => {
    // sum of a and b
    let sum = a + b;
    console.log("sum of a and b is " + sum);
    // difference between c and d
    let minus = c - d;
    console.log(" difference of c and d is " + minus)
    // product of (a+b) and (c-d)
    let product = sum * minus;
    console.log("product is " + product);
    // modulo of product with a
   let modulo = product % a
   return modulo;
  };

  // test 1
  console.log(lots_of_math(1,2,3,4))
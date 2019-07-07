  let a = +prompt('Enter the first number - the length of one side of the triangle', '');
  let b = +prompt('Enter the second number - the length of one side of the triangle', '');
  let c = +prompt('Enter the third number - the length of one side of the triangle', '');

  if (b + c - a >= 0 && a + c - b >= 0 && a + b - c >= 0) {
    console.log('Triangle exist');
      if (a === b && a === c && b === c) {
      console.log('Eequivalent triangle');
      } else if (a === b && a !== c || c === a && b !== c || b === c && a !== b){
        console.log('Isosceles triangle');
      } else {
        console.log('Normal triangle');
      }
  } else {
      console.log('Triangle does not exist');
    }
  

  

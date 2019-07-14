const reverseNumber = a => {
  var result = 0;
  var remained;
  while (a !== 0) {
    remained = a % 10;
    result = result * 10 + remained;
    a = parseInt(a / 10);
  }
  return result;
};

reverseNumber(-456);

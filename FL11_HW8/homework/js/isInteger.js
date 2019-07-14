const isInteger = a => {
  if (a === Math.round(a)) {
    return true;
  } else {
    return false;
  }
};
isInteger(5.1);

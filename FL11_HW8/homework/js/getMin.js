function getMin() {
  for (var i = 0; i < arguments.length; ) {
    var array = [];
    array = [...arguments];
    i++;
  }
  var minNumber = array[0];
  for (var j = 0; j < array.length; j++) {
    if (array[j] < minNumber) {
      minNumber = array[j];
    }
  }
  return minNumber;
}
getMin(1, 2, 3);

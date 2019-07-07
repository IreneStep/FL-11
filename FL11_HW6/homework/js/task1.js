let a1 = +prompt('Enter the numeric value on the x-axis of point A', '');
let a2 = +prompt('Enter the numeric value on the y-axis of point A', '');
let b1 = +prompt('Enter the numeric value on the x-axis of point B', '');
let b2 = +prompt('Enter the numeric value on the y-axis of point B', '');
let c1 = +prompt('Enter the numeric value on the x-axis of point C', '');
let c2 = +prompt('Enter the numeric value on the y-axis of point C', '');
if ((c1 - a1 === b1 - c1) - (c2 - a2 === b2 - c2)) {
  console.log('The dot divides the line by half on Cartesian plane!');
} else {
  console.log('The dot not divides the line by half on Cartesian plane!');
}

let start = confirm('Do you wan`t to play game?');
let enterNumber;
let randomNumber;
let integerRandom;
let attemptsLeft = 3;
let str = 'Attempts left: ' + attemptsLeft;

let min = 0;
let max = 8;
let half = 0.5;
let one = 1;
let i = 0;
let three = 3;
let againPlay;
let totalprize = 0;
let maxPrize = 100;
let middlePrize = 50;
let minPrize = 25;
let two = 2;
if (!start) {
  alert('You did not become a billionaire, but can');
  
} else {
  while (i < three) {
    randomNumber = min - half + Math.random() * (max - min + one);
    integerRandom = Math.round(randomNumber);
    console.log(integerRandom);
    enterNumber = +prompt(
      'Choose a roulette pocket number from 0 to 8\n' +
        str +
        '\ntotal prize: ' +
        totalprize,
      ''
    );

    if (enterNumber === integerRandom && i === 0) {
      alert('Congratulation, you won, your prize is 100$');
      totalprize = maxPrize;
    } else if (enterNumber !== integerRandom && i === 0) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize = 0;
    } else if (enterNumber === integerRandom && i === 1) {
      alert('Congratulation, you won, your prize is 50$');
      totalprize += middlePrize;
    } else if (enterNumber !== integerRandom && i === 1) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize += 0;
    } else if (enterNumber === integerRandom && i === two) {
      alert('Congratulation, you won, your prize is 25$');
      totalprize += minPrize;
    } else if (enterNumber !== integerRandom && i === two) {
      alert('Thank you for your patricipation. Your prize is 0$');
      totalprize += 0;
    }
    i++;
  }
  if (totalprize === 0) {
    alert('Thank you for your patricipation. Your total prize is 0$');
    againPlay = confirm('Do you want to play again?');
  } else {
    alert('Congratulation, you won, your total prize is: ' + totalprize + '$');
    againPlay = confirm('Do you want to play again?');
  }
}

// Kata Link: https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript
function findNeedle(haystack) {
  for (let i =0; i<haystack.length; i++)
    if(haystack[i] == 'needle')
      return "found the needle at position " + i;
  return 'needle not found'
}

// Kata Link: https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript
function findAverage(array) {
  let total = 0;
  if (array.length <= 0)
    return 0;
  else
    for (let i of array)
      total += i;
  return total/array.length;
}

// Kata Link: https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
function stringToArray(string){

  let wordArr = string.split(' ');
  return wordArr;

}

// Kata Link: https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
  if ((p1 == 'scissors' && p2 == 'paper') || (p1 == 'rock' && p2 == 'scissors') || (p1 == 'paper' && p2 == 'rock') ) return 'Player 1 won!'
  else if ((p1 == 'scissors' && p2 == 'scissors') || (p1 == 'rock' && p2 == 'rock') || (p1 == 'paper' && p2 == 'paper') ) return 'Draw!'
  else return 'Player 2 won!'
};
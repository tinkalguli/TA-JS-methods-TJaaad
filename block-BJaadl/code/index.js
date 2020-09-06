let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

function findLongestWord (arr) {
  return arr.reduce((a, c) => a = a.length > c.length ? a : c);
}

// - Convert the above array "words" into an array of length of word instead of word.

words.map(e => e = e.length);

// - Create a new array that only contains word with atleast one vowel.

words.filter(e => e.includes("a")
                  || e.includes("e")
                  || e.includes("i")
                  || e.includes("o")
                  || e.includes("u"));

// - Find the index of the word "rhythm"

words.indexOf("rhythm");

// - Create a new array that contians words not starting with vowel.

words.filter(e => !(e.startsWith("a")
                  || e.startsWith("e")
                  || e.startsWith("i")
                  || e.startsWith("o")
                  || e.startsWith("u")));

// - Create a new array that contianse words not ending with vowel

words.filter(e => !(e.endsWith("a")
                  || e.endsWith("e")
                  || e.endsWith("i")
                  || e.endsWith("o")
                  || e.endsWith("u")));

let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

function sumArray(numArr) {
  return numArr.reduce((a, c) => a + c);
}

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

numbers.filter(e => e % 3 === 0);

// - Create a new array that contains only even numbers

numbers.filter(e => e % 2 === 0);

// - Create  a new array that contains only odd numbers.

numbers.filter(e => e % 2);

// - Create a new array that should have true for even number and false for odd numbers.

numbers.map(e => e = e % 2 === 0);

// - Sort the above number in assending order.

numbers.sort((a, b) => a -b);

// - Does sort mutate the original array?

// Yes . Sort mutate the original array.

// - Find the sum of the numbers in the array.

numbers.reduce((a, c) => a + c);

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

function averageNumbers(array) {
  let sum = array.reduce((a, c) => a + c);
  return sum / array.length;
}

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

function averageWordLength(array) {
  let sum = array.map(e => e = e.length).reduce((a, c) => a + c);
  return sum / array.length;
}
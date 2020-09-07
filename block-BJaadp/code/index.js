let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

persons.reduce((a, c) => a + c.grade, 0) / persons.length;

// Find the average grade of male

let malePersons = persons.filter(a => a.sex === "M");
malePersons.reduce((a, c) => a + c.grade, 0) / malePersons.length;

// Find the average grade of female

let femalePersons = persons.filter(a => a.sex === "F");
femalePersons.reduce((a, c) => a + c.grade, 0) / femalePersons.length;

// Find the highest grade

persons.reduce((a, c) => a.grade > c.grade ? a : c, 0);

// Find the highest grade in male

malePersons.reduce((a, c) => a.grade > c.grade ? a : c, 0);

// Find the highest grade in female

femalePersons.reduce((a, c) => a.grade > c.grade ? a : c, 0);

// Find the highest grade for people whose name starts with 'J' or 'P'

persons.filter(a => a.name.startsWith("J") || a.name.startsWith("J")).reduce((a, c) => a.grade > c.grade ? a : c, 0);

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

let fruitsObj = fruitBasket.reduce((a, c) => {
    if (a[c]) a[c] = a[c] + 1;
    else a[c] = 1;
    return a;
  }, {});


/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

// fruitBasket.reduce((a, c, i) => {
//   if (a.filter(e => e[0]) === c) a.push([c, a[i][1] + 1]);
//    else a.push([c, 1]);
//   return a;
// }, []);

// fruitBasket.reduce((a, c) => {
//   return a.push([]);
// }, []);

// Object.keys(fruitsObj).reduce((a, c) =>

const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

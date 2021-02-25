const getNthElement = (index, array) => {
  return(array[index % array.length]);
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
  return
};

const addToArray2 = (element, array) => {
  let array2 = [...array];
  array2.push(element);
  return array2;
};

const removeNthElement = (index, array) => {
  array.splice(index, 1);
  return array;
};

const numbersToStrings = numbers => {
  numbers = numbers.map((number) => String(number));
  return numbers;
};

const uppercaseWordsInArray = strings => {
  strings = strings.map((string) => string.toUpperCase());
  return strings;
};

const reverseWordsInArray = strings => {
  strings = strings.map((string) => string.split('').reverse().join(''));
  return strings;
};

const onlyEven = numbers => {
  return numbers.filter((number) => number % 2 == 0)
};

const removeNthElement2 = (index, array) => {
  let newArray = array.filter((el) => array.indexOf(el) != index);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  let vowelWords = strings.filter((string) => string.match(/^[aeiou]/i));
  return vowelWords;
};

const removeSpaces = string => {
  return string.replace(/ /g, '');
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, number) => acc + number);
};

const sortByLastLetter = strings => {
  let s = reverseWordsInArray(strings).sort();
  return reverseWordsInArray(s);
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

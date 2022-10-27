// Questão 01
console.log("===== Questão 01 =====");
const isArray = (arr) => Array.isArray(arr);
console.log(isArray({})); // false
console.log(isArray("test")); // false
console.log(isArray([1, 2, 4, 0])); // true

// Questão 02
console.log("===== Questão 02 =====");
const arrayClone = (arr) => [...arr];
const newArray = arrayClone([1, 2, 4, 0]);
console.log(newArray); // [1, 2, 4, 0]

// Questão 03
console.log("===== Questão 03 =====");
const firstNth = (arr, n = 1) => arr.slice(0, n);
const testFirstNth = [7, 9, 0, -2];
console.log(firstNth(testFirstNth)); // [7]
console.log(firstNth(testFirstNth, 2)); // [7, 9]

// Questão 04
console.log("===== Questão 04 =====");
const testLastNth = [7, 9, 0, -2];
const lastNth = (arr, n = 1) => arr.slice(-n);
console.log(lastNth(testLastNth)); // [ -2 ]
console.log(lastNth(testLastNth, 2)); // [ 0, -2 ]

// Questão 05
console.log("===== Questão 05 =====");
const joinArrayString = (arr) => arr.join("");
console.log(joinArrayString(["a", "b", "c"])); // abc

// Questão 06
console.log("===== Questão 06 =====");
const insertMinusBetweenEveryEvenPair = (number) => {
  const isNumber = !isNaN(number);
  if (!isNumber) return;

  const numberString = number.toString();
  const numberArray = numberString.split("");
  const evenNumbersIndexes = [];

  numberArray.forEach((value, index, _) => {
    if (value % 2 !== 0) return;
    evenNumbersIndexes.push(index);
  });

  const firstElementOfEvenNumberPair = evenNumbersIndexes.reduce(
    (previous, value, index) => {
      if (typeof previous === "number") {
        previous = [previous];
      }

      const isPreceded = evenNumbersIndexes[index - 1] == value - 1;
      const isSuceeded = evenNumbersIndexes[index + 1] == value + 1;

      if (isPreceded && !isSuceeded) return previous;
      return [...previous, value];
    }
  );

  const minusInsertionIndex = firstElementOfEvenNumberPair.map(
    (value, index, _) => value + index
  );

  minusInsertionIndex.forEach((value) => {
    numberArray.splice(value + 1, 0, "-");
  });

  return numberArray.join("");
};

const numberTest = "025468";
console.log(insertMinusBetweenEveryEvenPair(numberTest)); // 0-254-6-8

// Questão 07
console.log("===== Questão 07 =====");
const countOccurrences = (arr) => {
  const occurences = {};

  arr.forEach((value) => {
    if (!occurences[value]) occurences[value] = 0;
    occurences[value] += 1;
  });

  return occurences;
};

const objectToObjectArray = (obj) => {
  const result = [];
  for (const [key, value] of Object.entries(obj)) {
    result.push({ key, value });
  }
  return result;
};

const sortObject = (arr) => {
  const result = [...arr];
  result.sort((previous, next) => previous.value - next.value);
  return result;
};

const mostFrequentValue = (arr) => {
  const occurencesMap = countOccurrences(arr);
  const occurrences = objectToObjectArray(occurencesMap);
  const sortedOccurrences = sortObject(occurrences);
  const mostFrequent = sortedOccurrences.pop();
  return mostFrequent.key;
};

const testArrayOccurrences = [1, 1, 3, 3, 5, 6, 7, 8, 8, 9, 9, 9];
const mostFrequent = mostFrequentValue(testArrayOccurrences);
console.log(mostFrequent); // 9

// Questão 08
console.log("===== Questão 08 =====");
const arrayToLowerCase = (arr) =>
  arr.map((value) => {
    const isString = typeof value === "string";
    const parsed = isString ? value.toLowerCase() : value;
    return parsed;
  });

const getUniqueArray = (arr) =>
  arr.filter((value, index) => arr.indexOf(value) === index);

const uniqueValues = (arr) => {
  const lowerCaseArray = arrayToLowerCase(arr);
  const uniqueArray = getUniqueArray(lowerCaseArray);
  return uniqueArray;
};

const testArrayUnique = [1, 1, 1, 1, 33, 333, "a", "b", "A"];
const testArrayUniqueValues = uniqueValues(testArrayUnique);
console.log(testArrayUniqueValues); // [ 1, 33, 333, 'a', 'b' ]

// Questão 09
console.log("===== Questão 09 =====");
const sumArrays = (a, b) => {
  const lestElementsArray = a.length <= b.length ? a : b;
  const mostElementsArray = a.length > b.length ? a : b;

  const sumArrayValues = lestElementsArray.map((value, index) => {
    const valueMostElementsArray = mostElementsArray[index];
    return value + valueMostElementsArray;
  });

  const differenceSizes = mostElementsArray.length - lestElementsArray.length;
  const trailMostElementsArray = mostElementsArray.slice(-differenceSizes);
  return [...sumArrayValues, ...trailMostElementsArray];
};

const resultSumArrays = sumArrays([1, 1, 1], [1, 1, 1, 2, 3]);
console.log(resultSumArrays); // [ 2, 2, 2, 2, 3 ]

// Questão 10
console.log("===== Questão 10 =====");
const addElementsToStack = (stack, elements) => {
  return [...stack, ...elements];
};

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];
const resultAddElementsToStack = addElementsToStack(vetorPilha, vetorAdiciona);
console.log(resultAddElementsToStack); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

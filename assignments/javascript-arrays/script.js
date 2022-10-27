// Questão 01
const isArray = (arr) => Array.isArray(arr);
// console.log(isArray({}));
// console.log(isArray("test"));
// console.log(isArray([1, 2, 4, 0]));

// Questão 02
const arrayClone = (arr) => [...arr];
// console.log(arrayClone([1, 2, 4, 0]));

// Questão 03
const firstNth = (arr, n = 1) => arr.slice(0, n);

const testArray = [7, 9, 0, -2];
// console.log(firstNth(testArray));
// console.log(firstNth(testArray, 2));

// Questão 04
const lastNth = (arr, n = 1) => arr.slice(-n);
// console.log(lastNth(testArray));
// console.log(lastNth(testArray, 2));

// Questão 05
const joinArrayString = (arr) => arr.join("");
// console.log(joinArrayString(["a", "b", "c"]));

// Questão 06
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
// console.log(insertMinusBetweenEveryEvenPair(numberTest));

// Questão 07
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
  const occurrencesObject = objectToObjectArray(occurencesMap);
  const sortedOccurrences = sortObject(occurrencesObject);
  const mostFrequent = sortedOccurrences.pop();
  return mostFrequent.key;
};

const occ = mostFrequentValue([1, 1, 3, 3, 5, 6, 7, 8, 8, 9, 9]);
console.log(occ);

// Questão 08
const uniqueValues = (arr) => {
  const map = {};

  arr.forEach((value) => {
    const stringValue = isNaN(value) ? value : String(value);
    const lowerCaseString = stringValue.toLowerCase();
    map[lowerCaseString] = 1;
  });

  return Object.keys(map);
};

console.log(uniqueValues([1, 1, 1, 1, 33, 333, "a", "b", "A"]));

// Questão 09
const sumArrays = (a, b) => {
  const lestElementsArray = a.length <= b.length ? a : b;
  const mostElementsArray = a.length > b.length ? a : b;
  const sumArrays = lestElementsArray.map((value, index) => {
    const valueMostElementsArray = mostElementsArray[index];
    return value + valueMostElementsArray;
  });

  const differenceSizes = mostElementsArray.length - lestElementsArray.length;
  const result = [...sumArrays, ...mostElementsArray.slice(-differenceSizes)];
  return result;
};

console.log(sumArrays([1, 1, 1], [1, 1, 1, 2, 3]));

// Questão 10
const addElementsToStack = (stack, elements) => {
  const result = stack.slice();
  elements.forEach((value) => {
    result.push(value);
  });
  return result;
};

const vetorPilha = [1, 2, 3, 4, 5];
const vetorAdiciona = [6, 7, 8, 9, 10];
console.log(addElementsToStack(vetorPilha, vetorAdiciona));

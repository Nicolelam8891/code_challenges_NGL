// Level 1: Beginner

const sentences = [
  "This is the first sentence.",
  "A second sentence follows.",
  "The third sentence is here."
];

// Prompt: Write a function that takes an array of sentences and returns a new array with each sentence doubled.

const getDuplicateStrings = (sentenceArray) => {
  const duplicateStrings = sentenceArray.map(sentence => sentence + " " + sentence)
  //use the map method to iterate through the sentences array
  //add the sentence, with a space, and then the sentence again and repeat for the other sentences too
  return duplicateStrings
}
console.log(getDuplicateStrings(sentences))

const strings = [
  "Apple",
  "Banana",
  "Cherry",
  "Grapes",
  "Strawberry",
  "Blueberry"
];

// Prompt: Write a function that takes an array of strings and returns a new array containing only the strings with a length greater than 5.

const numbers = [5, 10, 15, 20, 25];
// Prompt: Write a function that takes an array of numbers and returns the sum of all the numbers in the array.

const books = [
  { title: "JavaScript for Beginners" },
  { title: "HTML and CSS Fundamentals" },
  { title: "Python Cookbook" },
  { title: "JavaScript: The Good Parts" }
];
// Prompt: Write a function that takes an array of objects representing books with a title property and returns the first book with the name "JavaScript."

const numbersToDouble = [2, 4, 6, 8, 10];
// Prompt: Write a function that takes an array of numbers and multiplies each number by 2, updating the original array.

// Level 2: Intermediate


const sentencesToReverse = [
  "Hello, world!",
  "This is a sample sentence.",
  "Array methods are fun to learn."
];
// Prompt: Write a function that takes an array of sentences and returns a new array with each sentence reversed.

const stringsToFilter = [
  "JavaScript is awesome!",
  "Python is powerful too.",
  "Java can be complex.",
  "C++ is fast and efficient."
];
const forbiddenWords = ["complex", "C++"];
// Prompt: Write a function that takes an array of strings and a target string. Return a new array containing only the strings that include the target string.

const wordsToConcatenate = ["Hello", "world,", "how", "are", "you?"];
// Prompt: Write a function that takes an array of words and returns a string that is the concatenation of all the words, separated by a space.

const cars = [
  { make: "Toyota", model: "Camry", description: "Sedan" },
  { make: "Tesla", model: "Model X", description: "Electric SUV" },
  { make: "Honda", model: "Civic", description: "Sedan" },
  { make: "Ford", model: "Escape", description: "SUV" }
];
// Prompt: Write a function that takes an array of objects representing cars with a make and model property. Return the first car that includes both "electric" and "SUV" in its description.

const stringsToCheckForError = [
  "No errors found.",
  "This has an error.",
  "Another error-free message.",
  "Error in this one too."
];
// Prompt: Write a function that takes an array of strings, checks if each string includes the word "error," and logs the index of the first occurrence of "error" in each string to the console.

// Level 3: Advanced

const people = [
  { name: "Alice", age: 32 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 40 },
  { name: "David", age: 22 },
  { name: "Eve", age: 28 },
];

// Prompt:
// Write a function that takes an array of people objects, filters out people who are under the age of 30, maps the remaining people to a new array of strings in the format "Name is X years old," where "Name" is the person's name and "X" is their age, and then returns these strings into a single sentence separated by commas.

// Example output: 
// "Alice is 32 years old, Charlie is 40 years old, Eve is 28 years old"

const words = [
  "apple",
  "banana",
  "cherry",
  "date",
  "elderberry",
  "fig",
  "grape",
  "kiwi",
  "lemon",
];
const fruitsToCheck = ["apple", "cherry", "grape"];
// Prompt:
// Write a function that takes an array of words and an array of fruits to check.  count how many times each fruit from the "fruitsToCheck" array appears in the "words" array. The print a message for each fruit found in the format "Found X occurrences of [fruit]." If a fruit is not found in the "words" array, do not print a message for it.

const salesData = [
  { product: 'Laptop', category: 'Electronics', amount: 1200 },
  { product: 'T-shirt', category: 'Apparel', amount: 25 },
  { product: 'Headphones', category: 'Electronics', amount: 100 },
  { product: 'Jeans', category: 'Apparel', amount: 50 },
  { product: 'Smartphone', category: 'Electronics', amount: 800 },
  { product: 'Sneakers', category: 'Apparel', amount: 75 },
];
//You have an array of sales data. Each object contains the name of a product and its sales amount. Calculate the total sales for each product category (categories are represented as strings) and return an object where the keys are category names, and the values are the total sales for each category.
// **Example Output:**
// {
//   "Electronics": 2100,
//   "Apparel": 150
// }

const text = "hello world";
// You have a string of text. Create a function that counts the frequency of each character in the text and returns an object where the keys are characters (as strings) and the values are the character counts.
//example output:
// {
//   "h": 1,
//   "e": 1,
//   "l": 3,
//   "o": 2,
//   " ": 1,
//   "w": 1,
//   "r": 1,
//   "d": 1
// }

const data = {
  item1: "key1:value1;key2:value2;key3:value3",
  item2: "key1:valueA;key2:valueB;key3:valueC",
  item3: "key1:valueX;key2:valueY;key3:valueZ",
};
const searchKey = "key2";
const searchValue = "valueB";


// Prompt:
// Your task is to write a function that takes an object, a "searchKey," and a "searchValue." The goal is to find a specific value associated with a key within the object. You will need to figure out which methods to use from JavaScript's standard library to achieve this.

// The function should search through the object's properties and return the value associated with the "searchKey" if both the key and the value match the provided criteria. If no matching key-value pair is found, return a message indicating that no match was found.

// Example output (assuming "searchKey" is "key2" and "searchValue" is "valueB"):
// "The value associated with key2 is valueB."

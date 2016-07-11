/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE

// --------------- No bonuses ---------------
function letterCount(string) {
  // Create a new object to store the letters and counts
  var output={};
  // Split the string into an array of letters
  var stringAsArray = string.split("");
  stringAsArray.forEach(function(el) {
    // If the output object already contains the letter, increment the count by 1
    if (output[el]) {
      output[el] += 1;
    // Otherwise (if it doesn't exist in the object yet), add the letter to the object with a count of 1
    } else {
      output[el] = 1;
    }
  });
  // After you iterate through the entire word array, return the object
  return output;
}

// --------------- With bonuses ---------------
function letterCount(string) {
  var output={};
  string.toLowerCase().replace(/[^a-zA-Z ]/g, "").split("").forEach(function(el) {
    // .toLowerCase() downcases the entire word so that capital/lowercase letters are identified as the same letter
    // ..replace(/[^a-zA-Z ]/g, "") uses something called REGEX, which we'll talk about in-depth when we get to Ruby
    // It basically replaces anything that's not a letter a-z with an empty string (deletes it)
    if (!output[el]) {
      output[el] = 1;
    } else {
      output[el] += 1;
    }
  });
  // Return the object with counts converted into percentages
  return calculateFrequency(output, string.length);
}

// Helper method to return an object with frequency instead of count
function calculateFrequency(object, length) {
  var letterArray = Object.keys(object);
  letterArray.forEach(function(letter) {
    object[letter] = (object[letter] / length);
  });
  return object;
}

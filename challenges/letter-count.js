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

/*

  Create a function `parseQueryString` that accepts a query string parameter as an argument, and
  converts it into an object, using the following rules:

    * An equals sign (`=`) separates a *key* on the left from a *value* on the right.
    * An ampersand (`&`) separates key-value pairs from each other.
    * All keys and values should be parsed as Strings.
    * The query string will not contain spaces.

  Here are some example inputs and outputs (mind the edge cases!):

  ```javascript
  parseQueryString("");
  //=> {}

  parseQueryString("a=1");
  //=> {
  //    "a": "1",
  //   }

  parseQueryString("first=alpha&last=omega");
  //=> {
  //    "first": "alpha",
  //    "last": "omega"
  //   }

  parseQueryString("a=apple&b=beet&b=blueberry&c=&d=10");
  //=> {
  //    "a": "apple",
  //    "b": "blueberry",   // "blueberry" overwrites "beet"!
  //    "c": "",            // empty string (missing value)
  //    "d": "10"           // "10" is a String!
  //   }
  ```

  Mega Bonus
  - Can you create the reverse function? Given an object, output a Query Parameter String:

    ``` javascript
    var o = {first: "alpha", last: "omega"};
    convertToQueryParameter(o); // "first=alpha&last=omega";
    ```

*/

// YOUR CODE HERE

// --------------- Solution ---------------
function parseQueryString(string) {
  var pairs = string.split("&");
  var output = {};
  pairs.forEach(function(el) {
    var set = el.split("=");
    output[set[0]] = set[1];
  });
  return output;
}

// --------------- Bonus ---------------
function convertToQueryParameter(object) {
  var output = "";
  // Get an array of all keys in the object
  var keys = Object.keys(object);
  // Create an array to store the key/value pairs
  var pairArr =[];
  keys.forEach(function(el) {
    // Create and store a string in the format key=value
    pairArr.push(el + "=" + object[el]);
  });
  // Return a string created by joining all of the pairs with an '&' between each
  return (pairArr.join("&"));
}

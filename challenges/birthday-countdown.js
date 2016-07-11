/*

  Create a function `daysUntilDate` that accepts a string (with the format `"mm/dd/yyyy"`) and
  returns the number of days (integer) between today and that date. Please use the built in
  Javascript `Date` type in your solution.

  See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

  Next, create a function `birthdayReminder` that accepts an array of objects, containing a person's
  date of birth (dob), and returns an array of reminder messages (strings).

  ```javascript
  birthdayReminder([
    {
      name: "Jack",
      dob: "10/31/2013"
    },
    {
      name: "Jill",
      dob: "4/01/1975"
    }
  ]);

  //=> [
  //      "Jack's birthday is in 75 days",
  //      "Jill's birthday is in 305 days"
  //    ]
  ```

  Bonuses
  - Will your function still work tomorrow when the date is different? Is it future proofed?
  - To make your output more relevant, can you sort by days remaining (ascending)?

*/

// YOUR CODE HERE

// --------------- Solution ---------------

// Finds the number of days between now and a date in the future
function daysUntilDate(string) {
  var date = Date.parse(string);
  var today = Date.now();
  return ((date - today)/(1000*60*60*24));
}

// Helper method that creates a string with the next instance of the birthday
// This sets the correct year for birthdays that have already passed this year
function formatDate(dateString) {
  // This is where the current date is determined, so it is "future proofed"
  var today = new Date();
  var dateArr = dateString.split("/");
  var todaysMonth = (today.getMonth() + 1);
  var todaysDate = (today.getDate());
  var todaysYear = (today.getFullYear());
  // If the month is in the future or it's the current month and the date hasn't happened
  if ((parseInt(dateArr[0]) > parseInt(todaysMonth)) || ((parseInt(dateArr[0]) === parseInt(todaysMonth)) && (parseInt(dateArr[1]) > parseInt(todaysDate))) ) {
    dateArr[2] = todaysYear;
    // If the month has already happened or it's the current month and the date already happened
  } else {
    dateArr[2] = todaysYear+1;
  }
  return dateArr.join("/");
}

function birthdayReminder(birthdays) {
  var output = [];
  birthdays.forEach(function(el) {
    var birthdayString = formatDate(el.dob);
    var daysUntil = daysUntilDate(birthdayString);
    output.push(el.name + "'s birthday is in " + parseInt(daysUntil) + " days");
  });
  return output;
}


// --------------- With bonuses ---------------

// (Uses the same helper methods as above)
function birthdayReminder(birthdays) {
  var output =[];
  // Calculates the days until each person's birthday and creates a sentence
  // Both values are added to the person object
  birthdays.forEach(function(el) {
    var birthdayString = formatDate(el.dob);
    var daysUntil = daysUntilDate(birthdayString);
    el.days = daysUntil;
    el.sentence = el.name + "'s birthday is in " + parseInt(daysUntil) + " days";
  });
  // Sorts the birthday array by the 'days' key in each object
  birthdays.sort(function (a,b){
    if(a.days > b.days) {
      return 1;
    }
    if (a.days < b.days) {
      return -1;
    }
    return 0;
  });
  // Pushes the sentences into an array to be returned
  birthdays.forEach(function(el) {
    output.push(el.sentence);
  });
  return output;
}

// Note: ^this bonus code isn't very dry!

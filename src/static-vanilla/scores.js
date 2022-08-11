/* --- GET AND STORE REFERENCES TO UI ELEMENTS AND SCORES --------- */

  const MAX_HIGH_SCORES = 5;
  const username = document.getElementById('username');
  const saveScoreButton = document.getElementById('saveScoreButton');
  const finalScore = document.getElementById('finalScore');

  // get references to scores from local storage
  const mostRecentScore = localStorage.getItem('mostRecentScore');

  // store an array of high scores into local storage
  // local storage only accepts key/value pairs whose values are strings so if you are storing a data type other than a string, it needs to be manually converted to a string.
  // you can convert an array to json with JSON.stringify([])
  // you can convert json coming from localStorage to an array with JSON.parse() 
  const highScores = JSON.parse(localStorage.getItem('highScores')) || []; // or initialize an empty high scores array if this is the first time

  // update the score display in the ui
  finalScore.innerText = mostRecentScore;


/* --- LISTEN FOR USER INTERACTION EVENTS --------- */

  // get the text entered into the username input
  // NOTE: remember to make this accessible
  username.addEventListener('keyup', () => {
    // disable the button if there is nothing entered into the username field
    saveScoreButton.disabled = !username.value;
  });


/* --- SCORE FUNCTIONS --------- */

  const saveHighScore = (e) => {

    e.preventDefault(); // prevents form from submitting to a different page 

    // create a score object that will reference the most recent user info so we can add it to the high scores array
    const score = {
      score: Math.floor(Math.random() * 100), // test score sorting with random numbers
      // score: mostRecentScore,
      name: username.value
    };

    // add the new score to the array
    highScores.push(score);

    /** -- SORT THE LIST IN DESCENDING ORDER--
     * array.sort()'s default behavior sorts strings so you have to pass it a comparison function that tells it how to sort the array's elements.
     * the sorting will be based the function's return value, so:
        1. negative value - a before b (sort to the left of the array)
        2. 0 - no change (do nothing, values are equal)
        3. positive value - b before a (sort to the left of the array)
     * passing .sort() the function: (a, b) => a - b tells it to sort in ascending order. invert the return expression for descending order b - a
     * https://forum.freecodecamp.org/t/arr-sort-a-b-a-b-explanation/167677
    */
    highScores.sort( (a, b) => {
      return b.score - a.score
    })

    // remove all items over a total of 5
    highScores.splice(MAX_HIGH_SCORES);

    // update local storage with our high scores and stringify the array so it can be saved as the proper local storage data type
    localStorage.setItem('highScores', JSON.stringify(highScores));

    // go back to homepage once we save our score
    window.location.assign('home.html');
  };


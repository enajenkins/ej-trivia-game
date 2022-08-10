/* --- GET REFERENCES TO UI ELEMENTS AND HIGH SCORES --------- */

// store reference to the high score <ul> container we will write the <li>s to
const highScoresList = document.getElementById('highScoresList');

// get high scores from local storage and turn them into an aray that we can map in order to modify the items
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


/**  --- CREATE THE HIGH SCORES LIST ITEMS --------- 
 * 
 * 1. set the new <li> collection as the children of the <ul> in the ui
 * 2. iterate through each high score and create an <li> in the ui for each one
      -- .map() takes in an array and allows you to modify each element and return a new array.
      -- you can then use .join() to convert the items in the array to a string so we can inject it into the ui
 */
highScoresList.innerHTML = 
  highScores.map( score => {
    // return an array of ui code strings created for each item
    return `<li class="high-score">${score.name}: ${score.score}</li>`
  }).join('');


const highScoresList = document.getElementById('highScoresList');
// get high scores from local storage and turn them into an aray that we can map in order to modify the items
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// console.log("highScoresList", highScoresList);
// console.log("highScores0", highScores);
console.log("highScores", highScores);

/* --- CREATE THE HIGH SCORES LIST ITEMS --------- */

// iterate through each high score and create an <li> in the ui for each one
// .map() takes in an array and allows you to modify each element and return a new array. 
// you can then use .join() to convert the items in the array to a string so we can inject it into the ui
highScoresList.innerHTML = 
  highScores.map( score => {
    // console.log(`<li class="high-score">${score.name} - ${score.score}</li>`);
    // return an array of ui code strings created for each item
    return `<li class="high-score">${score.name}: ${score.score}</li>`
  }).join('');
// set the new <li> collection as the children of the <ul> in the ui
// highScoresList.innerHTML = highScores;
// console.log("highScoresList 2: ", highScoresList);

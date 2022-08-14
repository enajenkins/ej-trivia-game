/* --- INITIAL SETTINGS AND STORE UI ELEMENTS --------- */

let availableQuestions = [];
let currentQuestion = {};
let isAcceptingAnswers = false; // prevents user from answering before question is loaded
let correctAnswer = "";
let questionCount = 0;
let score = 0;

// get question element, counter and score from the ui
const questionElement = document.getElementById('question');
const questionCounter = document.getElementById('question-counter');
const scoreText = document.getElementById('score');
const progressBar = document.getElementById('question-progress');

// get the answer choice nodelist from the ui...
// ...and to turn it into an array to perform actions on it
const answerChoiceContainer = Array.from(document.getElementsByClassName('answer-text'));

let questions = [];

// initialize settings we'll need to start the game
const CORRECT_SCORE_POINTS = 10;
const MAX_QUESTIONS = 3;


// fetch() returns a promise so you can chain handler methods
fetch('questions.json')
  .then( res => {
    // console.log("res: ", res);
    // get the body of the http response object and convert it to json 
    return res.json();
  })
  .then(loadedQuestions => {
    // set the questions data set array we are using to extract questions and answers to the data set array we just fetched and converted
    questions = loadedQuestions;
    // console.log("questions: ", questions);

    // wait to start the game until after you load the questions
    startGame();
  })
  .catch( err => {
    console.error(err);
  });


/* --- START GAMEPLAY FUNCTION --------- */

  const startGame = () => {
    // console.log("questions - startGame(): ", questions);

    // reset score and question counter to 0 when a new game begins
    score = 0;
    questionCount = 0;

    // grab the [questions] array and spread out each of it's items, then enter them into a new array.
    // this will return a full copy of the questions array and will avoid effecting the original array.
    // you can also spread and combine additional arrays into one large one later if desired.
    availableQuestions = [ ...questions ]; 
    // load new question
    getNewQuestion();
  }


/* --- QUESTIONS AND ANSWERS --------- */

  const getNewQuestion = () => {

    // check if there are anymore questions left in the [availableQuestions] array which havent been asked 
    // OR if we have reached the maximum amount of questions allowed. 
    // if so, navigate to the given url or location
    if ( availableQuestions.length === 0 || questionCount >= MAX_QUESTIONS ) {
      // store the player score in local storage so we can access it from the score screen. Save the score into the value 'mostRecentScore'
      localStorage.setItem('mostRecentScore', score);
      return window.location.assign('scores.html');
    }

    // update question count and progress bar when new question is loaded
    // this needs to happen before the progress bar value is calculated
    questionCount++;
    questionCounter.innerText = `${questionCount} / ${MAX_QUESTIONS}`;

    // calculate progress bar increments
    // NOTE: for manual progress bar increment the width of the inner bar by the progressBarValue %
    let progressBarValue = (questionCount / MAX_QUESTIONS) * 100;
    progressBar.setAttribute('value', progressBarValue);

    // -- POPULATE THE QUESTION INTO THE UI --
    // return random index for the question set 
    // NOTES: (Math.random() returns a demical number between 0 and 1 | multiplying that result by a number returns another number that can be converted to an integer via ceil() or floor() and used as the index
    // ENHANCEMENT: rather than random questions, refactor for random question sets so questions are not repeated in the game || store the rendered question indexes for the current session (or gamer account) in a collection to check against
    const questionIndex = Math.floor( Math.random() * availableQuestions.length ); 

    // get a reference to the current [question] array item data set using the random index
    currentQuestion = availableQuestions[ questionIndex ]; 

    // populate the #question element in the ui with the [question] text at the random index
    questionElement.innerText = currentQuestion.question; 


    // -- POPULATE THE ANSWERS INTO THE UI --
    // for each question container in the ui, store & pass in both the current container and it's index...
    // ...so it can be used to map the answers to the container innerText
    // ENHANCEMENT: eventually in React I may want to modify this to first check for the number of answers, then render that number of answer container elements into the ui - THEN perform this action.
    answerChoiceContainer.forEach(( currentContainer, currentIndex ) => {

      // while looping through each answerChoiceContainer ui element, replace the current container's innerText with an answer from the json's answer_choices array that matches the current container's index
      currentContainer.innerText = currentQuestion.answer_choices[ currentIndex ]; 

      // set the correct answer for the current question
      // NOTE: still need to allow for multiple correct answers
      correctAnswer = currentQuestion.correct_answer.toString();
    });

    // remove the question we just used from the array so we don't duplicate questions during the quiz
    // Cannot read properties of undefined (reading 'question') error will occur when we have run out of availableQuestions
    availableQuestions.splice( questionIndex, 1 );

    // after the question is loaded, allow user to answer question
    isAcceptingAnswers = true;
  }


/* --- UPDATE SCORE --------- */
  // pass a number in when the function is called and add it to the current score
  // ...then write it to the ui
  const updateScore = num => {
    score += num;
    scoreText.innerText = score;
  }


/* --- LISTENERS FOR UI USER ACTIONS --------- */

  // add a click event listener to each answer element in the ui so we can identify which answer the user selects and check if it's correct
  answerChoiceContainer.forEach( answer => {
    answer.addEventListener( 'click', e => {

      // ignore click if question is not loaded yet - adds a very slight delay 
      if (!isAcceptingAnswers) return;

      isAcceptingAnswers = false;
      const answerSelectedByUser = e.target;
      const answerSelectedByUserText = answerSelectedByUser.innerText;

      // set up correct vs incorrect selection logic for styling
      // const correctOrIncorrectClass = answerSelectedByUserText === correctAnswer ? "correct" : "incorrect";
      let correctOrIncorrectClass = "incorrect";
      if ( answerSelectedByUserText === correctAnswer ) {
        correctOrIncorrectClass = "correct";
      }

      // if the user selects the correct answer, update the score
      if ( correctOrIncorrectClass === "correct" ) {
        updateScore(CORRECT_SCORE_POINTS);
      }

      // apply the highlight class to the parent of the user selected answer 
      answerSelectedByUser.parentElement.classList.add(correctOrIncorrectClass);

      // remove the class after 1 second so highlight can register - then load a new question
      setTimeout(() => {
        answerSelectedByUser.parentElement.classList.remove(correctOrIncorrectClass);
        // load new question
        getNewQuestion();        
      }, 1000);


    } );
  });

// startGame();

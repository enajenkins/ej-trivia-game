/* --- LOCAL QUESTION DATA SET --------- */

let questions = [
  {
    category: "miscellaneous",
    type: "multiple choice",
    difficulty: "easy",
    question: "If you have 10 mangos and another person gives you 12 more, how how many mangos will you have in total?",
    answer_choices: [ 
      "1 mango", 
      "2 mangos", 
      "10 mangos", 
      "22 mangos" 
    ],
    correct_answer: "22 mangos"
  },
  {  
    category: "miscellaneous",
    type: "multiple choice",
    difficulty: "easy",
    question: "If a train is supposed to reach the station at 4:10am but it is 35 minutes late, at what time will the train reach the station?",
    answer_choices: [ 
      "4:45 am", 
      "3:00 am", 
      "4:45 pm", 
      "6:00 pm" ,
    ],
    correct_answer: "4:45 am"
  },
  {  
    category: "miscellaneous",
    type: "multiple choice",
    difficulty: "easy",
    question: "Which of these animals can fly?",
    answer_choices: [ 
      "Cats", 
      "Bats", 
      "Birds", 
      "Worms" 
    ],
    correct_answer: [
      "Bats",
      "Birds"
    ]
  },
  {  
    category: "miscellaneous",
    type: "multiple choice",
    difficulty: "easy",
    question: "Which of the following is a list of colors?",
    answer_choices: [ 
      "Dog, cat, fish", 
      "Earth, Mars, Venus, Saturn, Mercury, Jupiter, Neptune, Uranus", 
      "Guitar, drums, piano, harmonica, tambourine, trumpet", 
      "Red, orange, yellow, green, blue, indigo, violet"
    ],
    correct_answer: [
      "Red, orange, yellow, green, blue, indigo, violet"
    ]
  },
  {  
    category: "miscellaneous",
    type: "multiple choice",
    difficulty: "easy",
    question: "If you are reading a book and are on page 374, what will the number of the next page be?",
    answer_choices: [ 
      "375", 
      "373", 
      "474", 
      "400" 
    ],
    correct_answer: "375"
  }
];


/* --- INITIAL SETTINGS AND STORE UI ELEMENTS --------- */

  // initialize settings we'll need to start the game
  const CORRECT_SCORE_POINTS = 10;
  const MAX_QUESTIONS = 3;

  let availableQuestions = [];
  let currentQuestion = {};
  let isAcceptingAnswers = false; // prevents user from answering before question is loaded
  let correctAnswer = "";
  let questionCount = 0;
  let score = 0;

  // get question element, counter and score from the ui
  const question = document.getElementById('question');
  const questionCounter = document.getElementById('question-counter');
  const scoreText = document.getElementById('score');
  const progressBar = document.getElementById('question-progress');

  // get the answer choice nodelist from the ui...
  // ...and to turn it into an array to perform actions on it
  const answerChoiceContainer = Array.from(document.getElementsByClassName('answer-text'));


/* --- START GAMEPLAY FUNCTION --------- */

  const startGame = () => {
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

    // update question count and progress bar when new question is loaded
    // this needs to happen before the progress bar value is calculated
    questionCount++;
    questionCounter.innerText = `${questionCount} / ${MAX_QUESTIONS}`;

    // calculate progress bar increments
    // NOTE: for manual progress bar increment the width of the inner bar by the progressBarValue %
    let progressBarValue = (questionCount / MAX_QUESTIONS) * 100;
    progressBar.setAttribute('value', progressBarValue);

    // check if there are anymore questions left in the [availableQuestions] array which havent been asked 
    // OR if we have reached the maximum amount of questions allowed. 
    // if so, navigate to the given url or location
    // NOTE: Fix extra question before redirect glitch
    if ( questionCount > MAX_QUESTIONS || availableQuestions.length === 0 ) {
      return window.location.assign('/end.html');
    }

    // -- POPULATE THE QUESTION INTO THE UI --
    // return random index for the question set 
    // NOTES: (Math.random() returns a demical number between 0 and 1 | multiplying that result by a number returns another number that can be converted to an integer via ceil() or floor() and used as the index
    // ENHANCEMENT: rather than random questions, refactor for random question sets so questions are not repeated in the game || store the rendered question indexes for the current session (or gamer account) in a collection to check against
    const questionIndex = Math.floor( Math.random() * availableQuestions.length ); 

    // get a reference to the current [question] array item using the random index
    currentQuestion = availableQuestions[ questionIndex ]; 

    // populate the #question element in the ui with the [question] text at the random index
    question.innerText = currentQuestion.question; 


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

startGame();

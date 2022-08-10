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
  const CORRECT_BONUS = 10;
  const MAX_QUESTIONS = 3;

  let availableQuestions = [];
  let currentQuestion = {};
  let isAcceptingAnswers = true;
  let questionCount = 0;
  let score = 0;

  // get question element and counter from the ui
  const question = document.getElementById('question');
  const questionCounter = document.getElementById('question-counter');

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
    availableQuestions = [ ...questions]; 

    // load new question
    getNewQuestion();
  }


/* --- QUESTIONS AND ANSWERS --------- */

  const getNewQuestion = () => {
    // update question count when new question is loaded
    questionCount++;

    // -- POPULATE THE QUESTION INTO THE UI --
    // return random index for the question set 
    // NOTES: (Math.random() returns a demical number between 0 and 1 | multiplying that result by a number returns another number that can be converted to an integer via ceil() or floor() and used as the index
    // ENHANCEMENT: rather than random questions, refactor for random question sets so questions are not repeated in the game || store the rendered question indexes for the current session (or gamer account) in a collection to check against
    const questionIndex = Math.floor(Math.random() * availableQuestions.length); 

    // get a reference to the current [question] array item using the random index
    currentQuestion = availableQuestions[questionIndex]; 

    // populate the #question element in the ui with the [question] text at the random index
    question.innerText = currentQuestion.question; 

    // -- POPULATE THE ANSWERS INTO THE UI --
    // for each question container in the ui, store & pass in both the current container and it's index...
    // ...so it can be used to map the answers to the container innerText
    // ENHANCEMENT: eventually in React I may want to modify this to first check for the number of answers, then render that number of answer container elements into the ui - THEN perform this action.
    answerChoiceContainer.forEach((currentContainer, currentIndex) => {

      // while looping through each answerChoiceContainer ui element, replace the current container's innerText with an answer from the json's answer_choices array that matches the current container's index
      currentContainer.innerText = currentQuestion.answer_choices[currentIndex]; 
    });

  }

startGame();

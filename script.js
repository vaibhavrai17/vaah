const quizData = [
  {
    question: "Which language runs in a web browser?",
    options: ["java", "c", "python", "javascript"],
    answer: "javascript",
  },
  {
    question: "What is the smallest header in HTML by default?",
    options: ["h1", "h2", "h6", "h4"],
    answer: "h6",
  },
  {
    question: "What is the effect of the <b> tag?",
    options: [
      "it convert the text with in it to bold font",
      "used to write black coloured font",
      "change font size",
      "none",
    ],
    answer: "it convert the text with in it to bold font",
  },
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
  const quizContainer = document.getElementById("quiz");
  const currentQuestion = quizData[currentQuestionIndex];

  quizContainer.innerHTML = `
        <h2>${currentQuestion.question}</h2>
        ${currentQuestion.options
          .map(
            (option, index) => `
            <button class="option" onclick="selectAnswer('${option}')">${option}</button>
        `
          )
          .join("")}
    `;
}

function selectAnswer(selectedOption) {
  const currentQuestion = quizData[currentQuestionIndex];
  const options = document.querySelectorAll(".option");

  if (selectedOption === currentQuestion.answer) {
    score++;
    options.forEach((option) => {
      if (option.textContent === currentQuestion.answer) {
        option.classList.add("correct");
      }
    });
  } else {
    options.forEach((option) => {
      if (option.textContent === currentQuestion.answer) {
        option.classList.add("correct");
      }
      if (option.textContent === selectedOption) {
        option.classList.add("wrong");
      }
    });
  }

  currentQuestionIndex++;
  document.getElementById("next").classList.remove("hidden");
  if (currentQuestionIndex >= quizData.length) {
    document.getElementById("quiz").innerHTML = "";
    document.getElementById("next").classList.add("hidden");
    displayScore();
  }
}

function displayScore() {
  const scoreContainer = document.getElementById("score");
  scoreContainer.classList.remove("hidden");
  scoreContainer.innerHTML = `You scored ${score} out of ${quizData.length}`;
}

document.getElementById("next").addEventListener("click", loadQuestion);

loadQuestion();

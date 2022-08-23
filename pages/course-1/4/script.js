let randomQuestion = questions.sort((a, b) => {
  return 0.5 - Math.random();
});

function buildQuiz() {
  const output = [];
  let currentNumber = 1;

  randomQuestion.forEach((currentQuestion, questionNumber) => {
    const answers = [];

    output.push(
      `
        <div class="slide">
          <div class="question">${currentQuestion.question}</div>
          <div class="answers">
            <input type="text" name="question${questionNumber}" id="question${questionNumber}" placeholder="...." data="${currentNumber}" class="form-control text-center answer my-2">
          </div>
          <div class="messages"><span class="message-${questionNumber}"></span></div>
        </div>
      `
    );

    currentNumber++;
  });
  questionContainer.innerHTML = output.join("");
}

function showSlide(n) {
  slides[currentSlide].classList.remove("active-slide");
  slides[n].classList.add("active-slide");
  currentSlide = n;

  if (currentSlide === slides.length - 1) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "inline-block";
  }
}

function nextSlide() {
  showSlide(currentSlide + 1);
  nextButton.style.display = "none";
}

const questionContainer = document.querySelector("#quiz");
const nextButton = document.querySelector("#next");
const checkAnswer = document.querySelector("#check");

buildQuiz();

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(currentSlide);
nextButton.addEventListener("click", nextSlide);
nextButton.style.display = "none";

checkAnswer.addEventListener("click", () => {
  const answerContainers = questionContainer.querySelectorAll(".answers");
  const answerContainer = answerContainers[currentSlide];
  const selector = `input[id=question${currentSlide}]`;
  const userAnswer = (answerContainer.querySelector(selector) || {}).value;

  const messageContainers = questionContainer.querySelectorAll(".messages");
  const messageContainer = messageContainers[currentSlide];

  const correctAnswer = results(currentSlide);

  if (userAnswer == correctAnswer) {
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar, Silahkan lanjut ke materi berikutnya.</h5>`;
    } else {
      nextButton.style.display = "inline-block";
      messageContainer.innerHTML = `<h5 class="text-success">Jawaban Benar</h5>`;
    }
    answerContainer.querySelector(selector).style.border = "2px solid green";
  } else {
    answerContainer.querySelector(selector).style.border = "2px solid red";
    messageContainer.innerHTML = `<h5 class="text-danger">Jawaban Salah</h5>`;
  }
});

function results(n) {
  return randomQuestion[n].answer;
}

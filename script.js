const quizForm = document.getElementById("quiz-form");

quizForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const answers = {
    q1: "a",
    q2: "a",
    q3: "a",
    q4: "b",
    q5: "a"
  };

  let numCorrect = 0;

  for (const [question, answer] of Object.entries(answers)) {
    const selectedAnswer = quizForm.elements[question].value;

    if (selectedAnswer === answer) {
      numCorrect++;
    }
  }

  alert(`You got ${numCorrect} out of 5 questions correct!`);
});
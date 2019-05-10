var questions = [
  "What is the capital of Spain?"
]

var answers = [
  "Madrid"
]

function Quiz() {
  this.quizAnswers = []
}

Quiz.prototype = {
  constructor: Quiz,

  showQuestion: function(question) {
    return question
  },

  answer: function(answer) {
    this.playerAnswers.push(answer)
  },

  checkAnswer: function(answer, questionNumber) {
    if (answer === answers[questionNumber]) {
      return "Correct!"
    } else {
      return "Sorry, that was wrong."
    }
  }

}
describe("Quiz", function() {
  it("outputs first question", function() {
    var quiz = new Quiz
    var question = "What is the capital of France?"
    expect(quiz.showQuestion(question)).toEqual("What is the capital of France?")
  })

  it("allows user input to respond to question", function() {
    var quiz = new Quiz
    var answer = quiz.answer("Paris")
    console.log(answers)
    expect(quiz.checkAnswer(answer)).toEqual("Sorry, that was wrong.")
  })
})
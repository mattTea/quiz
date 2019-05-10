describe("Quiz", function() {
  it("outputs first question", function() {
    var quiz = new Quiz
    var question = "What is the capital of France?"
    expect(quiz.showQuestion(question)).toEqual("What is the capital of France?")
  })
})
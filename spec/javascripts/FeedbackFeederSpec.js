describe("FeedbackFeeder", function() {
  var feedbackFeeder

  it("returns a feedback prompt", function() {
    feedbackFeeder = new FeedbackFeeder()

    expect(feedbackFeeder.feedbackPrompt()).toEqual("We Ping Pong-paired really well today.")
  })
})

// Randomizer.random(0, 10).stub.to.return(7)
// Randomizer.random(0, 10).stub.to.return(8)

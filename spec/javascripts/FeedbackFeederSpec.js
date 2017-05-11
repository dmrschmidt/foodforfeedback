function StubRandomizer(stubbedValue) {
  this.stubbedValue = stubbedValue
}
StubRandomizer.prototype.constructor = StubRandomizer
StubRandomizer.prototype.pickWithinRange = function(upperBound) {
  return this.stubbedValue
}

describe("FeedbackFeeder", function() {
  var prompts = ['foo', 'bar']
  var randomizer1, randomizer2

  beforeEach(function() {
    randomizer1 = new StubRandomizer(0)
    randomizer2 = new StubRandomizer(1)
    spyOn(randomizer1, 'pickWithinRange').and.callThrough()
    spyOn(randomizer2, 'pickWithinRange').and.callThrough()
  })

  it("returns a feedback prompt based on randomizer", function() {
    var feedbackFeeder1 = new FeedbackFeeder(prompts, randomizer1)
    var feedbackFeeder2 = new FeedbackFeeder(prompts, randomizer2)

    expect(feedbackFeeder1.feedbackPrompt()).toEqual('foo')
    expect(feedbackFeeder2.feedbackPrompt()).toEqual('bar')
  })

  it('restricts randomization to available prompts', function() {
    var feedbackFeeder = new FeedbackFeeder(prompts, randomizer1)
    feedbackFeeder.feedbackPrompt()

    expect(randomizer1.pickWithinRange).toHaveBeenCalledWith(1);
  })
})

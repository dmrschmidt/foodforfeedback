function Randomizer() {
}
Randomizer.prototype.constructor = FeedbackFeeder

Randomizer.prototype.pickWithinRange = function(upperBound) {
  return Math.round(Math.random() * upperBound)
}

function FeedbackFeeder(prompts, randomizer) {
  this.prompts = prompts
  this.randomizer = randomizer
}
FeedbackFeeder.prototype.constructor = FeedbackFeeder

FeedbackFeeder.prototype.feedbackPrompt = function() {
  var pick = this.randomizer.pickWithinRange(this.prompts.length - 1)
  return this.prompts[pick]
}

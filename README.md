# High Five
food for + ∂ feedback

# Installation

```sh
$ brew install phantomjs
```

# Maintenance tasks

```sh
rake cf:deploy                          # deploys to Cloud Foundry
rake git:check_for_uncommitted_changes  # Checks for uncommitted changes and aborts if any are found
rake git:push                           # Pushes the current branch to origin
rake jasmine                            # Start server to host jasmine specs
rake jasmine:ci[random,seed]            # Run jasmine tests in a browser, random and seed override config
rake shipit                             # run tests, push to git and deploy
rake spec                               # Run RSpec code examples
```

# High Five - food for +/∆ feedback

This tool helps you get inspiration for what to talk about during plus deltas.

Plus deltas are a simple method for individuals or teams to engage in reflection
as an approach to continuous improvement. The +/∆ evaluation can help inform the
changes needed to achieve higher levels of performance. Set aside 5 minutes at
the end of each day to discuss what went well and what had room for improvements.

Teams can sometimes struggle to find a good starter for their +/∆. This is where
High Five comes in by offering suggestions with sometimes positive, sometimes
neutral and sometimes intentionally provocative statements for your team to
discuss.

It's recommended to set a collective reminder in your team's calendar for every
day. You can get recommendations by simply visiting https://highfive.cfapps.io

# Pre-Requisites / Installation

While the tool / website itself is a simple static HTML website with JS, during
development a few dependencies are required.

```sh
$ brew install phantomjs  # requires homebrew - https://brew.sh/
$ bundle install          # requires ruby
```

# Deployment

It's easy to deploy your own version to Cloud Foundry. Simply
[install the CF cli](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html),
login to your account, adjust the route in the `manifest.yml` and run
`rake cf:deploy`.

To get access to the version hosted on https://highfive.cfapps.io get in touch
with [@mamachanko](https://github.com/mamachanko) or [@dmrschmidt](https://github.com/dmrschmidt).

# Development tasks

```sh
rake cf:deploy                          # deploys to Cloud Foundry
rake dev:server                         # runs a local dev server
rake git:check_for_uncommitted_changes  # Checks for uncommitted changes and aborts if any are found
rake git:push                           # Pushes the current branch to origin
rake jasmine                            # Start server to host jasmine specs
rake jasmine:ci[random,seed]            # Run jasmine tests in a browser, random and seed override config
rake shipit                             # run tests, push to git and deploy
rake spec                               # Run RSpec code examples
```

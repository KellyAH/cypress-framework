# Purpose
Practice setting up different automation frameworks from scratch to compare setup time, easy of use, etc.

# Cypress Tests
Pro
* fast setup - 10 minutes
* test runner is super convenient to see tests run and inspect elements 
* test runner auto runs every time you save test files
* remove the need to wait helpers
See https://blog.logrocket.com/cypress-io-the-selenium-killer/
* Automatic waiting: Automatically waits for commands and assertions before moving on

Con
* can't handle multiple tabs
* was built not following [W3C](https://www.w3.org/) world wide web consortium

## Setup
Assumes you are on a Mac and chrome browser is already installed.
1. install [node](https://nodejs.org/en/download/)
2. install npm via: `brew install npm`
3. install dependencies in `package.json` via: `npm install`
Note: can also use yarn package manager to install dependencies.

[Steps](NOTES.md) for how this repo was setup from scratch.
 
# Run Tests 
1. In a Terminal open test runner: `npx cypress open` or `$(npm bin)/cypress open`
2. click on a test and watch it run.

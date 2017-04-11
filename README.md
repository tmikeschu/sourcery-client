# Sourcery (client)
[![Build Status](https://travis-ci.org/tmikeschu/sourcery-client.png)](https://travis-ci.org/tmikeschu/sourcery-client)


### About This

Tracking the supply chain of agricultural product is a common challenge. How do
you know where you coffee *really* came from? Is your apple truly from a
sustainable farm? This app addresses these problems by adding visibility to the supply chain process by allowing users to add, update, and
read transactions on the Ethereum blockchain.

This React.js app will fetch transation data from a simple [smart-contract ecosystem](https://github.com/ethanbennett/sourcery) on the
Ethereum blockchain. Information about these goods and transactions (name, price, location, &c) will be
fetched from a [Rails API service](https://github.com/DavidKnott/sourcery-api).

We are just getting started on this project. Eventually, users will be able to
visit the root page and view a list of items and their respective supply chain
paths.

Future iteration plans include the ability to add goods/products and register
change of possession (e.g., between producer and transport).

*This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).*

### About Us

We are a group of four [Turing School](https://www.turing.io/) students, and this is our capstone
project for the back-end engineering program. You can learn more about our
development process at these links: [DTR (team expectations)](https://gist.github.com/tmikeschu/1a37eef7724f06421d8bca19fd8be8ad), [stand-ups](https://gist.github.com/tmikeschu/14555f11f0d24d7c09749519c7b04337), [Pivotal Tracker](https://www.pivotaltracker.com/n/projects/1996565).
And more about us at these ones: [Nick](https://github.com/ski-climb), [David](https://github.com/DavidKnott), [Ethan](https://github.com/ethanbennett), [Mike](https://github.com/tmikeschu).

### Environment Setup

```javascript
git clone git@github.com:tmikeschu/sourcery-client.git
cd sourcery-client/

// install dependencies
npm install

// run all the tests
npm run testAll
// End-to-end tests will start upon 'q'uitting the Jest runner.

// run the Enzyme/Jest tests
npm run test
// then 'a' then 'q', 

// run the end-to-end tests in Nightwatch.js independently
npm run e2e


// start the server
npm start
```

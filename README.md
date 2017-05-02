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

**If you're interested in the Sourcery production site, please note that interaction will be limited. All relevant smart contracts are deployed to a live blockchain, but each submission requires a personal confirmation from the account that deployed it. For now, the easiest way to interact with our whole ecosystem is to follow the directions on [our Solidity repository](https://github.com/ethanbennett/sourcery) for setting up an instance of TestRPC and running the client locally.**

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
```

Run all the tests
```javascript
npm run testAll
// End-to-end tests will start upon 'q'uitting the Jest runner.
```

Run the Enzyme/Jest tests
```javascript
npm jest
// then 'a' then 'q', 
```

Run the end-to-end tests in Nightwatch.js independently

```javascript
npm run e2e
```

*Note* when running Nightwatch tests, you might run into an error involving Java
Development Kit. If so, use your preffered package manager to download a JDK.


Start the server
```javascript
npm start
```

To check for build status and compatibility with Travis CI, run:
```
CI=true npm test
CI=true npm run build
```


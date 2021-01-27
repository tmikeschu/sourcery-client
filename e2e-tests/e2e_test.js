var config = require('../nightwatch.conf.js');

module.exports = { // adapted from: https://git.io/vodU0
  'Sourcery Assert Title': browser => {
    browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .assert.title('Sourcery')
    .end();
  },

  'Bad address input shows sorry message': browser => {
    browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .setValue('.product-search input[type=text]', 'badaddress')
    .click('.product-search input[type=submit]')
    .waitForElementVisible('.product-search p', 1000)
    .assert.containsText('.product-search p', 'Sorry, no results.')
    .end();
  },
  
  'There is a form to create a checkpoint': browser => {
    browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .assert.elementPresent('.create-checkpoint form')
    .end();
  },

  'There is a form to create a lot': browser => {
    browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .assert.elementPresent('.create-lot form')
    .end();
  }
};

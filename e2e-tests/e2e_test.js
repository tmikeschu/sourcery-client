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

  'Good address input shows list of paths': browser => {
    browser
    .url('http://localhost:3000/')
    .waitForElementVisible('body', 1000)
    .setValue('.product-search input[type=text]', '0x7da07904ffproduct9afdecb7b1eb0d767b37803')
    .click('.product-search input[type=submit]')
    .waitForElementVisible('.product-search li:nth-of-type(1)', 1000)
    .assert.containsText('.product-search li:nth-of-type(1) h4', 'Created by: Myrtis')
    .assert.containsText('.product-search li:nth-of-type(1) button', 'view')
    .assert.containsText('.product-search > button', 'View All')
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

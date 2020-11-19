// module.exports = {
//   'Google\'s Search Functionality' : function (browser) {
//     browser
//       .url('https://www.google.com/ncr')
//       .waitForElementVisible('body', 1000)
//       .setValue('input[type=text]', 'BrowserStack')
//       .click('input[name=btnK]')
//       .pause(1000)
//       .assert.title('BrowserStack - Google Search')
//       .end();
//   }
// };

module.exports = {
  'ReadyUp title check' : function (browser) {
    browser
      .url('http://www.readyup.com')
      .waitForElementVisible('body', 1000)
      .pause(1000)
      .assert.title('ReadyUp | Fueling Vibrant Game Communities')
      .end();
  }
};
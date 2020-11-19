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
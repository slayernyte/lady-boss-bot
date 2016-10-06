var LadyBossBot = require('./ladyBossBot');
var nconf = require('nconf');

nconf.add('config', {type: 'file', file: './configBot.json'});

try {
  var tokenSlack = process.env.TOKEN_SLACK || nconf.get('tokenslack');

  this.ladyBossBot = new LadyBossBot(tokenSlack);
  this.ladyBossBot.run();
} catch (error) {
  console.log('Bot failed bDLY' + error);
}

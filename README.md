<h1 align="center">lady-boss-bot</h1>
<p align="center">
    <a title='Build Status' href="https://travis-ci.org/thecodegoddess/lady-boss-bot">
        <img src='https://travis-ci.org/thecodegoddess/lady-boss-bot.svg?branch=master' alt='travis Status' />
    </a>
    <a title='coveralls Status' href='https://coveralls.io/r/thecodegoddess/lady-boss-bot'>
        <img src='https://img.shields.io/coveralls/thecodegoddess/lady-boss-bot.svg' alt='Coverage Status' />
    </a>
</p>
<p align="center">
    <a title='closed issue' href='http://issuestats.com/github/thecodegoddess/lady-boss-bot'>
        <img src='http://issuestats.com/github/thecodegoddess/lady-boss-bot/badge/issue' alt='issue stats' />
    </a>
    <a title='blog' href=''>
       <img src='https://img.shields.io/badge/style-blog-blue.svg?label=my' alt='blog' />
    </a>
</p>

## About lady-boss-bot
>lady-boss-bot is a  node.js slack bot.
sassy lady boss

## Bot Command list

* Just to start type hello in the general chat after invited the bot in it
   
    ``` hello  ```


## Install Getting Started
1. Create a new [bot integration](https://my.slack.com/services/new/bot)
1. Choose between **One-Click Heroku** or **Manual Heroku**

 - **One-Click Heroku**
       Click this button:

       [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/thecodegoddess/lady-boss-bot))

 - **Manual Heroku**
    *  Install [Heroku toolbelt](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)
    * Create a new bot integration (as above)
    *  `heroku create`
    *  `heroku config:set TOKEN_SLACK=[Your Slack bot integration token (obtainable at https://my.slack.com/services/new/bot)]`
    *  `git push heroku master`


## Development

* To test lady-boss-bot

    ```$ npm run-script test```

* To debug lady-boss-bot

    ```$ npm run-script debug```

* To see the test coverage lady-boss-bot

    ```$ npm run-script coverage```

* To run lady-boss-bot on your machine

    ```$ npm run-script start```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b lady-boss-bot`
3. Commit your changes: `git commit -a `
4. Push to the branch: `git push origin lady-boss-bot`
5. Submit a pull request

## History

For detailed changelog, check [Releases](https://github.com/thecodegoddess/lady-boss-bot/releases).

### Contributors

Contributor | GitHub profile | 
--- | --- | ---
Amber-Lee Madigan  (Creator) | [thecodegoddess](https://github.com/thecodegoddess) | 


# Welcome to the Node.js Pinky & The Brain Bot for Discord

This is a chat bot for Discord modeled after Pinky & The Brain using their famous quotes. It uses Node Cron to initiate chat between Pinky & The Brain on your Discord channel once an hour.  Currently setup for every 15 minutes past the hour.

<br />

### Prerequisites  
* Node.js and a Discord Channel with webhooks enabled
<br />

### Installation
```
git clone https://github.com/drumfreak/pinky-brain
cd pinky-brain
npm install
```

### Configure .env file
You'll need to generate a Discord Channel Webhook and add it to the .env file:

```DISCORD_WEBHOOK="https://discordapp.com/api/webhooks/xxxxxxxxxxx"```


### Run the Bot
```npm run-script startlocal```


### Send an Introduction to the Discord Channel
In your browser: `http://localhost:3069/api/bot/start`

### Initiate a Bot Message or Action
In your browser: `http://localhost:3069/api/bot/talk`


### Edit Bot Interactions
There are no databases to reduce overhead of this bot. Therefore, all of the bot interactions are hard coded into the actions array of object arrays in 
```server/bots/pinkyBot.js```

For example add an array of objects to be performed in order such as:

```// What are we doing tonight:
    [{
        bot: 'Pinky',
        wait: 1000,
        message: 'What are we going to do tonight, Brain?'
    },

    {
        bot: 'The Brain',
        wait: 2000,
        message: 'Same thing we do every night, Pinky. Try to ditch Dudley Boore!'
    }],
```

The action objects use the following keys:

* bot - The bot's name. It's recommended you use either Pinky or The Brain for the avatars to work.
* wait - The amount of time to wait before sending this action
* message: Supports Discord Markdown and must be string escaped.


If you would like to contribute more Pinky & The Brain interactions, let me know! I'll add them to the repo.

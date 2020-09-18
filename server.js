'use strict';
/* jshint node: true */
const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3069;
const bodyParser = require('body-parser');
const discordBot = require('./server/bots/discord');
const botRoutes = require('./server/routes/bot');

const cors = require('cors');

require('./server/cronjobs/pinkyBot');

const morgan = require('morgan');
app.use(morgan('dev'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// if (process.env.FORWARD_ADDRESS !== '') {
//   // Angular prod
//   app.use("/", express.static(path.join(__dirname, "angular")));
// }

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  );
  next();
});
app.use(cors());

// Additional routes...


// Additional routes...
app.use('/api/bot', botRoutes);

app.listen(port, () =>   console.log(`Server is listening on port ${port}.`));

if (process.env.CURRENT_ENV === 'production') {
    const embeds = [ {
                    color: 5057159,
                    title: process.env.SITENAME + ' Server Message',
                    description: ' Pinky & The Brain are here to serve...',
                    }];
                    
    discordBot.sendMessage(process.env.SITENAME +  ' Node.js started', embeds);
}

console.log('Pinky and the Brain Bot Started...');
module.exports = app;

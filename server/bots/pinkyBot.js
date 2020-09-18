const discordBot = require('./discord');
const e = require('express');

const actions = [

    // Introduction
    [{
        bot: 'Pinky',
        wait: 1000,
        message: 'I am Pinky'
    },

    {
        bot: 'The Brain',
        wait: 3000,
        message: 'I am Brain'
    }],

    // Going to Denny's
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'We\'re going to a place where the sun never sets, the size of your wallet matters, and actors and actresses slave all day.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'We\'re going to Denny\'s?'
    }],

    // What are we doing tonight:
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

    [{
        bot: 'Pinky',
        wait: 1000,
        message: 'Gee Brain, what are we going to do tonight?'
    },

    {
        bot: 'The Brain',
        wait: 2000,
        message: 'The same thing we do every night, Pinky. Try to take over the world.'
    }],

    // Happy Sappy Children
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Yes, finally! The Happy Sappy Children of Many Lands ride! Where cheering music will spread the message that a mouse should rule the world!'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Oh no, Brain. Narf! You\'re thinking of that other park in Orlando.'
    }],

    // Capitol Hill
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'We must head to a place where overweight, middle-aged people go to party and throw away money.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Capitol Hill??'
    }],

    // Roman Numeral One
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Since it represents the first phase of my plan, we\'ll call it Roman Numeral One.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Roman Numeral One. Roman... Romy!'
    }],

    // Diana Ross
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'I will accept nothing less than mahogany.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'There is no substitute for Diana Ross.'
    }],

    // Pinky Astounded
    [{
        bot: 'Pinky',
        wait: 1000,
        message: 'Egad. You astound me, Brain.'
    },

    {
        bot: 'The Brain',
        wait: 2000,
        message: 'That\'s a simple task, Pinky.'
    }],

    // Brain's Forumula
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'No, Pinky. Never use two drops of the formula. It would cause a reaction on the molecular level that is completely unpredictable.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Oh, I hate it when that happens. Narf.'
    }],

    // Brain on Freud
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Sigmund Freud would have had a field day with you, Pinky.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Ah, he liked sports then, did he?'
    }],

    // Brain Dim
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Do you practice being dim or is it a natural talent?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Oh practice Brain. All day, EVERYDAY!'
    }],

    // Exciting The Masses
    [{
        bot: 'The Brain',
        wait: 1000,
        message: '...that excites the masses.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Newspapers? Religious tracts? The Victoria\'s Secret catalogue?'
    }],

    // Brain on Hannibal
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Hannibal, our book confirms / tried conquering Italy with pachyderms / Just why he failed, nobody tells / but he never could get past the Roman sentinels.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'And he couldn\'t find his weapons in the peanut shells!'
    }],

    // Brain on elephants
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'An elephant is not required, / if I can use the media to be admired!'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'The TV viewers you\'ll delight / unless the network puts your show on Sunday night!'
    }],

    // Brain on Attila
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Attila was a mighty Hun / he ransacked Asia Minor just for fun / But when he got to Europe\'s banks / he was routed by an army of heroic Franks.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: '[eating a hot dog] I like mine with sauerkraut and mustard, thanks!'
    }],

    // the Brain on subliminal
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Why pillage like a criminal / when I can send out messages subliminal?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Please send a message to that Hun / to see if he can pillage me a hot dog bun! [the Brain hits Pinky]'
    },
    {
        bot: 'Pinky',
        wait: 1000,
        message: 'Zort!'
    }],

    // Ponderings
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so Brain, but if you replace the P with an O, my name would be Oinky, wouldn\'t it?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so Brain... but do I really need 2 tongues?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so, Brain, but this time, you put the trousers on the chimp.'
    }],


    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so, Brain, but if they called them "sad meals" no one would buy them.'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so, Brain, but then it\'d be Snow White and the Seven Samurai...'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so, Brain, but how are we going to make pencils that taste like bacon? Or maybe we should make bacon that tastes like pencils. Narf.'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so, but where will we find an open tattoo parlor at this time of night?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Well, I think so Brain, but isn\'t Regis Philbin already married?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Well, I think so Brain, but if we didn\'t have ears, we\'d look like weasels.'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so Brain, but pants with horizontal stripes make me look chubby.'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so Brain, but why would anyone want a depressed tounge?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Um... I think so, Brain, but what if the chicken won\'t wear the nylons?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Um... I think so, Brain, but what if the chicken won\'t wear the nylons?'
    }],

    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'I think so Brain, but if Jimmy cracked corn, and no one cares, why does he keep doing it?'
    }],


    // Long Ponders:
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, are you pondering what I\'m pondering?'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Wha, I think so Brain, but - *snort* No, no, it\'s too stupid.'
    },

    {
        bot: 'The Brain',
        wait: 1000,
        message: 'We will disguise ourselves as a cow.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'Narf. That was it *exactly*.'
    }],


    // Multi Interactions
    [{
        bot: 'Pinky',
        wait: 1000,
        message: 'Just say "poit".'
    },

    {
        bot: 'The Brain',
        wait: 1000,
        message: 'Whenever I say "poit" Pinky, we will be on Mars.'
    },

    {
        bot: 'Pinky',
        wait: 2000,
        message: 'What planet is this?'
    }],
    
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Pinky, there are times when I feel I\'m bearing my soul to a tube of caulk.'
    },

    {
        bot: 'Pinky',
        wait: 1000,
        message: 'Mmm! Caulk!'
    },

    {
        bot: 'The Brain',
        wait: 2000,
        message: '...And yet I continue.'
    }],
    
    [{
        bot: 'The Brain',
        wait: 1000,
        message: 'Why rule like such a reprobate / when I can put the world in a hypnotic state?'
    },

    {
        bot: 'Pinky',
        wait: 1000,
        message: 'When everybody\'s in a trance / you can make the people do a chicken dance! [Attila and his horse do a chicken dance]'
    },

    {
        bot: 'The Brain',
        wait: 2000,
        message: '[grabs Pinky\'s nose] Pinky, if you don\'t stop this foolishness, I shall have to hurt you.'
    }],


    // The Brain's Reflections
    [{
        bot: 'The Brain',
        wait: 100,
        message: 'This is the earth. And this is Pinky. You can tell the difference quite easily. One is a lump of inert matter hurtling blindly through the void. The other... is the earth.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'So many levels... [drools] ahhhhh...'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Charlie Sheen, Ben Vereen, shrink to the size of a lima bean.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'I\'d like to thank all the little people I stepped on to get where I am today.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'The entire world will beg to bow before me, their charismatic despot.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Now throw the switch and let us begin the battle for the planet.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Enough. If this is what passes for conduct becoming of world leaders, I don\'t want any part of it.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Pinky, you give a whole new meaning to the phrase, "counter-intelligence." You have the I.Q. of plaster.'
    }],
    
    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Hurry up, Pinky, If we don\'t get to Carley Simon\'s house I\'ll never know if that song was about me.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'I haven\'t created a monster, I\'ve created another Pinky.'
    }],
    
    [{
        bot: 'The Brain',
        wait: 100,
        message: '[after realizing that Pinky\'s DNA has corrupted his clone] Be afraid. Be very afraid.'
    }],

    [{
        bot: 'The Brain',
        wait: 100,
        message: 'Moo. We are a cow. Take us to China.'
    }],

    // Pinky Reflections
    [{
        bot: 'Pinky',
        wait: 100,
        message: 'Narf!!!'
    }]
];

function sleep(ms){
    return new Promise(resolve=>{
      setTimeout(resolve,ms);
    });
}


exports.pinkyStart = async (req, res, next) => {
    try {
        let startActions = actions[0];
        console.log('--------------------------------');
        for(var x = 0; x < startActions.length; x++) {
            console.log(startActions[x]);
            await sleep(startActions[x].wait);
            await exports.sendBotMessage(startActions[x].bot, startActions[x].message);
        }
        console.log('--------------------------------');
        return res.status(200).json({ result: 'success', message: 'Bots Talked' });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ result: 'fail', message: 'Error -  Could not make the bot talk' });
    }
};

exports.sendBotMessage = async (botName, message) => {
    try {
        discordBot.sendMessage(message, [], botName);
    } catch (error) {
        console.log(error);
    }
};

exports.pinkyTalk = async (req, res, next) => {
    try {
        let maxLength = actions.length - 1;
        let botActions = Math.floor(Math.random() * (maxLength) ) + 1;

        // console.log('Bot Action Number', botActions);
        console.log('--------------------------------');
        for(var x = 0; x < actions[botActions].length; x++) {
            console.log(actions[botActions][x]);
            await sleep(actions[botActions][x].wait);
            await exports.sendBotMessage(actions[botActions][x].bot, actions[botActions][x].message);
        }
        console.log('--------------------------------');

        return res.status(200).json({ result: 'success', message: 'Bots Talked' });
    } catch (error) {
        console.log(error);
        return res.status(200).json({ result: 'fail', message: 'Error -  Could not make the bot talk' });
    }
};

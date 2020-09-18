const axios = require('axios').default;
const PINKY_AVATAR = 'https://i.imgur.com/xmQAMHr.png';
const BRAIN_AVATAR = 'https://i.imgur.com/zwDpI5U.png';
const webHook = process.env.DISCORD_WEBHOOK;

exports.sendMessage = async (messageText, embeds = [], username = process.env.DISCORD_BOTNAME) => {
     try {
        console.log('Sending Discord Message', messageText);
        const msg = {
            username,
            content: messageText
        };

        if (username === 'Pinky') {
            msg.avatar_url = PINKY_AVATAR;
        } else if (username === 'The Brain') {
            msg.avatar_url = BRAIN_AVATAR;
        }

        if (embeds.length > 0) {
            msg.embeds = embeds;
        }

        let f = await axios.post(webHook, msg);
        if (f.response) {
            console.log(f.response);
        }
        return true;
     } catch (error) {
         console.log(error);
         return false;
     }
};

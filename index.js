

require('dotenv').config();

const { Client, Intents } = require('discord.js');
//const MusicController = require('./Modules/MusicController');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

client.on('ready', () => {
    //connect to db
    console.log('Ready!');
});

client.login(process.env.TOKEN);
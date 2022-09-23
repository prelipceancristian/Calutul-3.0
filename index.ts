import DiscordJs, { Intents } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client : DiscordJs.Client = new DiscordJs.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on('ready', () => {
    //connect to db
    console.log('Ready!');
})

client.login(process.env.TOKEN);
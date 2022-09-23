const { Client, Collection, GatewayIntentBits } = require('discord.js');
const CommandHelper = require('./Common/CommandHelper');

class CalutulClient{
    static GetClient(){
        const client = this.CreateClient()
        client.commands = this.CreateClientCollection();
        return client;
    }

    static CreateClient(){
        return new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildVoiceStates
            ]
        });
    }

    static CreateClientCollection(){
        const collection = new Collection();
        for (const filePath of CommandHelper.GetCommandFiles()){
            const command = require(`./commands/${filePath}`);
            collection.set(command.data.name, command);
        }

        return collection;
    }
}




module.exports = CalutulClient
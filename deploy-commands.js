require('dotenv').config();
const { REST, Routes } = require('discord.js');
const CommandHelper = require('./Common/CommandHelper');

const commands = CommandHelper.GetCommandFiles().map(file => require(`./commands/${file}`).data.toJSON());
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		const data = await rest.put(
            Routes.applicationCommands(process.env.CLIENTID),
            { body: commands },
        );
        
		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		console.error(error);
	}
})();

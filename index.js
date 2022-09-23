require('dotenv').config();

const client = require('./CalutulClient').GetClient()

client.on('ready', () => {
    //connect to db
    console.log('Ready!');
});

client.on('interactionCreate', async interaction =>{
    if (!interaction.isChatInputCommand()) return;

	const command = interaction.client.commands.get(interaction.commandName);
	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
})

client.login(process.env.TOKEN);
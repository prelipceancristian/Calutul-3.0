class ClientEventHandler{
    static HandleClientOnReady(){
        //connect to db
        console.log('Ready!');
    }

    static async HandleClientOnInteractionCreate(interaction)
    {
        if (!interaction.isChatInputCommand()) return;

        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        }
}

module.exports = ClientEventHandler;

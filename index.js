require('dotenv').config();

const client = require('./client/CalutulClient').GetClient()
const clientEventHandler = require('./client/ClientEventHandler')

client.on('ready', clientEventHandler.HandleClientOnReady);
client.on('interactionCreate', clientEventHandler.HandleClientOnInteractionCreate)

client.login(process.env.TOKEN);
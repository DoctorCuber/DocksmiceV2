const { Client, Intents } = require("discord.js");
const { token } = require('./config.json')
const config = require('./config.json')

const client = new Client ({ intents: [Intents.FLAGS.GUILDS]});

client.once('ready', () =>{

    console.log('Ready to serve ;{)');
    
    client.user.setPresence({
        status: 'Online',
        activity: {
            type: 'PLAYING',
            name: 'Discord'
        }
    })
})


client.login(token);
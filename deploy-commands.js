const { SlashCommandBuilder } = require('@discordjs/bui;ders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientID, guildID, token} = require('./config.json');

const commands = [
//new SlashCommandBuilder().setname("Command Name").setDescription("Description of the command")

].map(command => command.toJSON());

const rest = new REST({ version:'1.2.13'}).setToken(token);

rest.put(Routes.applicationGuildCommands(clientID, guildID), {body: commands})
    .then(() => console.log('Sucessfully loaded all commands.'))
    .catch(console.error)
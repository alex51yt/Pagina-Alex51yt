const Discord = require('discord.js');
const config = require('./config.json');

const Client = new Discord.Client({disableEveryone: true});

Client.on("ready", async () => {
    console.log(`${Client.user.username} está listo!`)

    Client.user.setActivity("En mantenimiento", {type: "PLAYING"})
});

Client.login(config.token);

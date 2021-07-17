const Discord = require('discord.js');
const config = require('./config.json');

const Client = new Discord.Client({disableEveryone: true});

Client.on("ready", async () => {
    console.log(`${Client.user.username} está listo!`)

    Client.user.setActivity("En mantenimiento", {type: "PLAYING"})
});

Client.on("message", async message => {
    if(message.author.Cilent || message.channel.type === "dm") return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1)

    if(cmd === `${prefix}hola`) {
        return message.channel.send("Hola, que tal!")
    }

    if(cmd === `${prefix}adios`) {
        return message.reply("Hasta pronto")
    }

})

Client.login(config.token);
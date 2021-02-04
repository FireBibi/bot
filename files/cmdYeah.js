const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */

 module.exports = (message, client) => {

    let args = message.content.split(" ");
    
    if (args[0].toLowerCase() !== config.prefix + "yeah") return;
    message.delete();

    let yeah = new Discord.MessageEmbed()
        .setTitle("Hey !😉")
        .setDescription("Cette commande est exécutée par " + message.author.tag)
        .addField("Ma première commande")
        .setFooter("Dev by Bibi_fire 😉");
        
    message.channel.send(yeah);
};

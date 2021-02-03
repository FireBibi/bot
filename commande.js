const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */

 module.exports = (message, client) => {

    let args = message.content.split(" ");

    if (args[0].toLowerCase() !== config.prefix + "embed") return;

    let embed = new MessageEmbed()
        .setTitle("Coucou !")
        .setDescription("Cette commande est exécutée par " + message.author.tag)
        .addField("La documentation de Discord.JS :", "[ici](https://discord.js.org/#/docs/main/stable/general/welcome)")
        .addField("La documentation des Embeds :", "[ici](https://discordjs.guide/popular-topics/embeds.html#using-the-richembedmessageembed-constructor)")
        .setFooter("Dev by Bibi_fire 😉");

    message.channel.send(embed);
};
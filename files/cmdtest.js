

const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */
module.exports = (message, client) => {
    let args = message.content.split(" ");

    if (args[0].toLowerCase() !== config.prefix + "help") return;
    message.delete();

    let embed = new Discord.MessageEmbed()
        .setColor('CYAN')
        .setTitle("Menu d'aide :grey_question:")
        .setThumbnail('https://image.flaticon.com/icons/png/512/36/36601.png')
        .setDescription('Ici toutes les commandes sont listée.')
        .addFields(
            {name: "`Utilitaire`", value: "```" + config.prefix + "help\n" + config.prefix + "setup```", inline: true },
            {name: "`MODERATION`", value: "```" + config.prefix +"kick \n" + config.prefix + "ban\n" + config.prefix + "clear\n" + config.prefix + "unban```", inline: true},

        )
            
        .setFooter('Dev by " Bibi_fire#1748.',)
        .setTimestamp();

    message.channel.send(embed);
}


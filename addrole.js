const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */
module.exports = (message, client) => {

    let args = message.content.split(" ");
    
    if (args[0].toLowerCase() !== config.prefix + "addrole") return;

    message.delete();

    if (message.member.roles.cache.get("804739813705646121")) {

        let embed = new Discord.MessageEmbed()
        .setTitle("Rôle ajouté")
        .setDescription("Le role <@&804739813705646121> a bien été retiré à " + message.author.username)
        .setColor("#C5D1CF")
        
    
    message.channel.send(embed).then(msg => {

        setTimeout(() => {

            if (msg.deleted) return;
            msg.delete();

        }, 4 * 1000)
    })
    return;
    }

    let role = args[1]
 
    message.member.roles.add("804739813705646121");

    let embed = new Discord.MessageEmbed()
    .setTitle("Rôle ajouté")
    .setDescription("Le role <@&804739813705646121> a bien été ajouté à " + message.author.username)
    .setColor("#C5D1CF")
    

    message.channel.send(embed).then(msg => {

        setTimeout(() => {

            if (msg.deleted) return;
            msg.delete();

        }, 4 * 500)
    })
};
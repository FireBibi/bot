const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} _client 
 */
module.exports = (message, _client) => {
    //commande ban
    let args = message.content.split(" ");
    

    if (args[0].toLowerCase() !== config.prefix + "ban") return ;
        message.delete();        
        if (message.member.hasPermission("BAN_MEMBERS")) return ;
            
            let mention = message.mentions.members.first();

            if (mention == undefined) return message.channel.send('Vous devez mentionner quelqu\'un')

            if (mention.bannable) { 
            mention.ban();
            message.channel.send(mention.displayName + `a été banni avec suucès`);
            }   
            else{
            message.channel.send('Vous ne pouvez pas ban ce membre')
        }

};

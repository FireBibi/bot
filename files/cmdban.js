const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} _client 
 */
module.exports = (message, _client) => {
    //commande ban
    let args = message.content.split(" ");
    let reason = args.slice(2).join(" ");

    if (message.content.startsWith(config.prefix + "ban")){
        if (message.member.hasPermission('ADMINISTRATOR')){ 
            message.delete();
            let mention = message.mentions.members.first();

            if (mention == undefined){
                return message.channel.send('Vous n\'avez mentionné personne')
            }
            else {
                if (mention.bannable){
                    mention.ban();
                    message.channel.send(mention.displayName + ` a été banni pour raison : ${reason}`);
                }
                else {
                    message.reply('Le membre n\'est pas bannisable')
                }
            }
        }
    }
}

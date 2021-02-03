const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} _client 
 */
module.exports = (message, _client) => {
    //commande kick
    let args = message.content.split(" ");

    if (message.member.hasPermission('ADMINISTRATOR')){
        if (message.content.startsWith(config.prefix + "kick")){
            let mention = message.mentions.members.first();

            if (mention == undefined){
                return message.channel.send('Vous n\'avez mentionné personne')
            }
            else {
                if (mention.kickable){
                    mention.kick();
                    message.channel.send(mention.displayName + " a été kick");
                    console.log(mentions.displayName + " a été kick");
                }
                else {
                    message.reply('Le membre n\'est pas kickable')
                }
            }
        }
    }
}
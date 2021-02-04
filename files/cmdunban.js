const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} _client 
 */

 module.exports = (message, _client) => {
    //commande unban
    let args = message.content.split(" ");

    if(message.content.startsWith(config.prefix + "unban")){
        message.delete();
        if(message.member.hasPermission('BAN_MEMBERS')){
            let user = message.guild.cach


            if ( user ==  undefined){ 
                return message.channel.send('Vous n\'avez mentionné personne')
            }
            else {
                user.unban();
            }
            

        }
        else {
            message.channel.send('Vous n\'avez pas la permissions de faire cela')
        }
    } 
} 
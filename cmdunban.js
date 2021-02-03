const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} _client 
 */
module.exports = (message, _client) => {
    //commande mute
    let args = message.content.split(" ");

    if (message.member.hasPermission('BAN_MEMBERS')){
        if (message.content.startsWith(config.prefix + "unban")){
            let mention = message.mentions.members.first();

            if (mention == undefined){
                return message.channel.send('Vous n\'avez mentionné personne')
            }
            message.guild.fetchBan().then(async bans => {
                if(bans.size == 0) return message.channel.send('Vous ne pouvez pas unban car personne n\'est ban')
                let bUser =  bans.find(b => b.user.id ==  userID);
                if (!bUser) return message.channel.send ('Le membre est pas ban')
                await message.guild.members.unban(bUser.user, reason).catch(err => {
                    console.log(err);
                    return message.channel.send('Quelque chose ne va pas pendant l\'unban')
                }).then(() => {
                    message.channel.send(`Le membre ${args[1]}a été debanni avec surccès`)
                });
            });
        }
    }
    else {
        message.channel.send('Voue ne pouvez pas deban ce membre')
    }
} 
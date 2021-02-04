const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */

 module.exports = (message, client) => {

    let args = message.content.split(" ");
    
    if(message.content.startsWith(config.prefix + 'setup')){
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Vous n\'avez pas la permissions d\'utiliser cette commande')
        message.delete();
        let muteRole = message.guild.roles.create({
            data: {
                name: 'muted',
                permissions: 0
            }
        })
        let Arrivé_Départ = 'Arrivé_départ'
        message.guild.channels.create('Arrivé_Départ');
        
    }


    

}
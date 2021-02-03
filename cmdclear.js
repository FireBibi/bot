const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */
module.exports = (message, client) => {

    let args = message.content.split(" ");
    
    if(message.member.hasPermission("MANAGE_MESSAGES")){ 
        if(message.content.startsWith(config.prefix + "clear")){
        message.delete();
            let args = message.content.trim().split(/ +/g);
        

            if(args[1]){
                if(!isNaN(args[1]) && args[1] >= 1 && args[1] <= 99){

                    message.channel.bulkDelete(args[1])
                    message.channel.send(`J'ai supprimé ${args[1]} message(s) merci de garder le chat propre`).then(m => m.delete({timeout: 2 * 1000}));
                }
                else{
                    message.channel.send("vous devez entrer un nombre entre 1 et 99");
                }
            }
            else{
                message.channel.send('vous devez entrer un nombre après la commande syntaxe : /clear nombre')
            }
            
       }
    }
    else {
        message.channel.send('Vous ne pouvez pas executer cette commande car vous n\'avez pas la permissions pour')
    } 
};  
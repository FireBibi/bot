const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */
module.exports = (message, client) => {
    
    let args = message.content.split(" ");


    if(message.content.startsWith(config.prefix + 'help')) {
        message.delete();
        let help = new Discord.MessageEmbed()
            .setColor('color_red')
            .setTitle('Ici tu trouveras toutes les commandes')
            .setThumbnail(client.avatarURL)
            .setFooter(`\` / \` + ban + @pseudo + raison , pour bannir un membre\n`
            `\` / \` + kick + @pseudo + raison , pour kick un membre\n`
            `\` / \` + help , pour afficher cette liste\n`
            `\` / \` + setup , pour setup le serveur\n`
            `\` / \` + clear + nombre de message a supprimer , pour supprimer le nombre de message indiqué\n`
            `\` / \` + unban @pseudo , pour débannir quelqu'un\n`)
            .addField('Merci d\'avoir regarder la documentation de mon bot\n');
        message.channel.send(help);

    }



}
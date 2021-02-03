const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Client} client 
 */
module.exports = (client) => {

    // Code à executer quand le bot est connecté

    console.log(`Je suis sur ${client.guilds.cache.size} serveur`);
}
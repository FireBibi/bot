const Discord = require("discord.js");
const config = require("../config.json");

/**
 * @param {Discord.Message} message 
 * @param {Discord.Client} client 
 */
export default (message, client) => {

    let args = message.content.split(" ");

    if (args[0].toLowerCase() !== prefix + "embed") return;

    message.channel.send("Regarde les logs du bot 🤖 ");

    console.log("Et voilà !");
};
console.log("Démmarrage du bot...");

// Récupération des fichiers/librairies
const Discord = require("discord.js");
const config = require("./config.json");


// Création/connection du bot
const client = new Discord.Client();
client.login(config.token).catch(() => console.log("Impossible de se connecter au bot !"));

// Quand le bot est connecté
client.on("ready", () => {

    console.log("Bot connecté !");

    require("./files/start")(client);

    setTimeout(() => {
        client.user.setActivity("Joue a être dévélopper");
    },100)
});
//quand quelqu'un rejoin un serveur ou il y a mon bot

client.on("guildMemberAdd", member => {
    console.log("Un membre est arrivé sur un serveur");
    member.guild.channels.cache.find(channel => channel.name === "Bienvenue").send("Bienvenue au nouveau : " + member.displayName + "nous somme desormais **" + member.guild.memberCount+ "** " )
    member.roles.add.name("membre").then(mbr => {

    }).catch(() => {
        console.log("Le rôle n'a pas pu être attriué")
    });
});

//quand quelqu'un quitte un serveur ou il y a mon bot

client.on('guildMemberRemove', member =>   {
    console.log('Un membre est parti sur un serveur')
    member.guild.channels.cache.find(channel => channel.name === "Bienvenue").send("Un membre nous a quitté :sob:" + member.displayName + "nous somme desormais **" + member.guild.memberCount+ "** ")
});

// Quand un message est envoyé
client.on("message", message => {

    // Si le message est envoyé par un bot ou envoyé dans un mp, on annule l'event
    if (message.author.bot || !message.guild) return;

    // On fais ma commande
    // On fais ma commande
    
    
    require("./files/addrole")(message, client);
    require('./files/cmdYeah')(message, client);
    require('./files/cmdsetup')(message,client);
    require('./files/cmdban')(message, client);
    require('./files/cmdkick')(message, client);
    require('./files/cmdclear')(message, client);
    require('./files/cmdunban')(message, client);
    require('./files/cmdtest')(message, client);
});
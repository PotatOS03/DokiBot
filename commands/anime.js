const Discord = require("discord.js");
const request = require("request");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
    let animeName = args.slice(0).join("-").toLowerCase();
    
    request(`https://kitsu.io/anime/${animeName}`, (error, response, body) => {
        
    })
}

module.exports.help = {
    name: "anime",
    desc: "Get information about a certain anime | IN DEVELOPMENT",
    usage: " [anime name]"
}
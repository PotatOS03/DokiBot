const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    try {
        let {body} = await superagent
        .get(`aws.random.cat/meow`);

        let catEmbed = new Discord.RichEmbed()
        .setColor("ffb2dc")
        .setTitle("Random Cat")
        .setImage(body.file);

        message.channel.send(catEmbed);
    } catch(e) {
        message.channel.send("Please try again!").then(msg => msg.delete(5000));
        console.log(e);
    }
}

module.exports.help = {
    name: "cat",
    desc: "Generate a random cat photo or gif"
}
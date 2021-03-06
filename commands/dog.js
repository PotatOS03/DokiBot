const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
    try {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);

        let dogEmbed = new Discord.RichEmbed()
        .setColor("ffb2dc")
        .setTitle("Random Dog")
        .setImage(body.url);

        message.channel.send(dogEmbed);
    } catch(e) {
        message.channel.send("Please try again");
    }
}

module.exports.help = {
    name: "dog",
    desc: "Generate a random dog photo or gif"
}
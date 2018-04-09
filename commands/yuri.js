const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bestGirlChannel = message.guild.channels.find(`name`, "best-girl");
    if (message.channel !== bestGirlChannel) return message.reply(`use best girl commands in ${bestGirlChannel}!`).then(msg => msg.delete(5000));
    
    let monikaRole = message.guild.roles.find(`name`, "Team Monika");
    let sayoriRole = message.guild.roles.find(`name`, "Team Sayori");
    let yuriRole = message.guild.roles.find(`name`, "Team Yuri");
    let natsukiRole = message.guild.roles.find(`name`, "Team Natsuki");

    message.member.removeRole(monikaRole.id);
    message.member.removeRole(sayoriRole.id);
    message.member.addRole(yuriRole.id);
    message.member.removeRole(natsukiRole.id);

    message.delete().catch(O_o=>{});
    message.channel.send(`${message.author} chose Yuri`);
}

module.exports.help = {
    name: "yuri",
    desc: "Join team Yuri",
    usage: ""
}
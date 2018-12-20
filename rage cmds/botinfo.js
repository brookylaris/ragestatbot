const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `<:bot:525233976810536970> ${bot.user.username}`, inline)
    .addField("Bot Owner", "<:Rage:525233976810536970> <@448778965293727744>", inline )
    .addField("Servers", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Users", `<:user:424958082691629057> ${usersize}`, inline)
    .addField("Created On", bot.user.createdAt)
    .setFooter(`Information about: ${bot.user.username}. Developed by: Odar`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}

const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

let xdemb = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `r?ban [user] [reason]`, true)
        .addField("Example:", `r?ban @Rage spam`)

        if(!message.member.hasPermission("BAN_MEMBERS") && message.author.id !== "448778965293727744") return message.channel.send("Sorry, Larissa didn't give you permission to use this!");

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("I can't ban this Rage Member!")
        if(member.user.id === "448778965293727744") return message.channel.send("I can't ban my Empress!")

        if(member.id === message.author.id) return message.channel.send("You can't ban your self")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I couldn't ban because of: ${error}`));

        let bean = new Discord.RichEmbed()
        .setColor("#00ff00")
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      }
      module.exports.help = {
        name: "ban"
      }

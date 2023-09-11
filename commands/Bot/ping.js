import { MessageEmbed } from "discord.js"

export default {
   name: "ping",
   execute(message){

     const discord_ping = message.client.ws.ping
     const Bot_ping = Date.now() - message.createdTimestamp   

     const response = new MessageEmbed()     
        .setAuthor({ name:"Trefax Support Server",  iconURL: "https://cdn.discordapp.com/attachments/1099327833505013862/1136284346832142358/1687867910991.png" })
        .setColor("BLUE")
        .setFooter({text: "Bot At Your Service" })
        .setTimestamp()
        .setFields([
            { name: "Discord Delay", value: `${discord_ping} ms`, inline: true },
            { name: "Bot Delay", value: `${Bot_ping} ms`, inline: true },
        ])
      
        message.reply({ embeds: [response] })
   }  
}       


        
import { MessageEmbed } from "discord.js"

export default client => {

    client.on("messageCreate", message => {
 if (message.content == "!Stats") {

        const response = new MessageEmbed()
            .setAuthor({ name:"Trefax Support Server", iconURL: "https://cdn.discordapp.com/attachments/1099327833505013862/1136284346832142358/1687867910991.png" })
            .setDescription("")
            .setColor("BLUE")
            .setFooter({text: "Bot At Your Service" })
            .setTimestamp()
            .addField("Devoloper","₦Ї₦ℑ₳")    
            .addField("Memory Usage", "31.43 MB (%8)", true)
            .addField("Ram Usage", "24%", true)

        message.channel.send({ content: "Bot Information",  embeds: [response] })
    }
})
}

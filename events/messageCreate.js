export default client => {

    const prefix = "!"

    client.on("messageCreate", message => {
        if (message.content.startsWith(prefix) == false) return

        const args = message.content.slice(1).trim().split(/ +/)
        const commandName = args.shift().toLowerCase()

        const command = client.commands.get(commandName)
        if (!command) return

            // permision Control
            if(command.permission && !message.member.permissions.has(command.permission)) return message.reply(`To Use This Command \`${command.permission}\` You Must Have Authority!`)

        try {
            command.execute(message)
         } catch (e) {
            console.error(e)
            message.reply("There is an Error in This Command!")
         }   
     })

 }     
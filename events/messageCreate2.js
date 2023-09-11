export default client => {

    client.on("messageCreate", message => {
        if (message.content == "Hello") {
            message.reply("Hello Welcome.")
        }
    })
    


    client.on("messageCreate", message => {
        if (message.content == "hello") {
            message.reply("hello Welcome.")
        }
    })
    
}  
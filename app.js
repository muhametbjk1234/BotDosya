import { Client, Collection } from "discord.js";
import { readdirSync } from "fs"

const client = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS", "GUILD_INTEGRATIONS"],

     presence: { activities: [{ name: "Get Help by typing !Help", type: "WATCHING" }] }
 })

 // Event Loader
readdirSync("./events").forEach(async file => { 
    const event = await import(`./events/${file}`).then(m => m.default)
    event(client)
 })
 
 // Command Loader
 client.commands = new Collection()
 readdirSync("./commands").forEach(category => {

   readdirSync(`./commands/${category}`).forEach(async file => {
       const command = await import(`./commands/${category}/${file}`).then(c => c.default)
       client.commands.set(command.name, command)
   })

 })

client.login("MTEzNjI1NzAyODIzOTY2NzIyMA.GY-cky.Q93HiRMsgMuEEbtwUx5rpFsQhhb-6lJJpdEiBY")    

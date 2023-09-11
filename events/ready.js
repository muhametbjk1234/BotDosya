export default client => {

    client.once("ready", () => {
        client.user.setStatus("idle")
        console.log("Trefax Bot Hazır!")
    })

}

module.exports = {
    name: 'obavestenje',
    description: "Ovo je bitno!",
    async execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemas pravo da ovo koristis!")

        message.channel.send('Svima ljubiteljima igrice FiveM mogu da udju na ovaj server pod nazivom Endless Roleplay ! Evo vam diskord link! https://discord.gg/UF7qM5Ma @everyone')

    
}}
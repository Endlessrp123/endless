const Discord = require('discord.js')

module.exports = {
    name: 'kick',
    description: "Sa ovom komandom kikas membere ako su bezobrazni xexe!",
    async execute(message, args){
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("Nemas pravo da ovo koristis!")
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("Korisnik je kikan");
        

        }else{
            message.channel.send(`Nemozes njega da kikas!`);
        }
    }
}
        

        
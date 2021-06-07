const Discord = require('discord.js')

module.exports = {
    name: 'ban',
    description: "Sa ovom komandom banas membere ako su bezobrazni xexe!",
    async execute(message, args){
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nemas pravo da ovo koristis!")
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send("Korisnik je banan");

            const embed = new Discord.MessageEmbed()
        .setTitle(`Izbacen si od **${message.guild.name}**`)
        .setDescription(`Jer si prekrsio pravilo servera. Ako zelis da saznas koje ili unban javi se @!Kum`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(client.user.tag, client.user.displayAvatarURL())

        }else{
            message.channel.send(`Nemozes njega da banas!`);
        }
    }
}
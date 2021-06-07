module.exports = {
    name: 'reakcija',
    description: "Izaberi emoji i budi u jednoj od 2 strane!!",
    async execute(message, args, Discord, bot){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemas pravo da ovo koristis!")
        const channel = 'stavi kanal u koji se salje ova poruka';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Ime rola za br 1");
        const blueTeamRole = message.guild.roles.cache.find(role => role.name === "ime rola za br 2");
 
        const yellowTeamEmoji = 'stavi emoji koji os';
        const blueTeamEmoji = 'isto stavi emoji koji os';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#420dab')
            .setTitle('Izaberi stranu!!')
            .setDescription('Izaberi u koji tim oces, i budi sa drugovima i bracom!\n\n'
                + `${yellowTeamEmoji} za Kerove\n`
                + `${blueTeamEmoji} za Mafijaše`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
 
        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        bot.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   
const fs = require('fs');


module.exports = {
    name: 'mute',
    description: "Sa ovim mutiras membere",
    async execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemas pravo da ovo koristis!")
        
        const target = message.mentions.users.first();
        if (target) {
 
            let mainRole = message.guild.roles.cache.find(role => role.name === 'Stavi glavni rol koji svi igraci imaju a to je igrac');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'Stavi rol koji oces bot da daje osobama ali namesti u samom rolu da ne moze da salje poruke');
            
            let memberTarget = message.guild.members.cache.get(target.id);
 
            if (!args[1]) {
                memberTarget.roles.remove(mainRole.id);
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> je mutovan`);
                return
            }
            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> je mutovan za ${ms(ms(args[1]))}`);
 
            setTimeout(function () {
                memberTarget.roles.remove(muteRole.id);
                memberTarget.roles.add(mainRole.id);
            }, ms(args[1]));
        } else {
            message.channel.send('Ne mozemo pronaci osobu!');
        }
    }
}
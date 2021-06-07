const fs = require('fs');
module.exports = {
    name: 'unmute',
    description: "Sa ovim unmjutiras membere",
    execute(message, args){
        const target = message.mentions.users.first();
        if(target){
            let mainRole = message.guild.roles.cache.find(role => role.name === 'stavi rol koji svaki igrac ima na serveru');
            let muteRole = message.guild.roles.cache.find(role => role.name === 'isto stavi rol koji oces da bot skine to je mute posto je ovo unmute');
 
            let memberTarget= message.guild.members.cache.get(target.id);
 
            memberTarget.roles.remove(muteRole.id);
            memberTarget.roles.add(mainRole.id);
            message.channel.send(`<@${memberTarget.user.id}> je unmutovan`);
        } else{
            message.channel.send('Ne mozemo pronaci osobu!');
        }
    }
}
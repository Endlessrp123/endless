const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});
 
const prefix = '-';

const fs = require('fs');

const ms = require('ms');

const embed = new Discord.MessageEmbed()

const memberCounter = require ('./counters/member-counter');

client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Spreman sam za posao!');
    client.user.setActivity('Aca')
    memberCounter(client)
});
 
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Ovo je za welcome kao da se daje rol');
     
        guildMember.roles.add(welcomeRole);
        guildMember.guild.channels.cache.get('stavi id kanala koji os').send(`Dobrodosao/la <@${guildMember.user.id}> na nas server! Obavezno procitaj pravila komandom -pravila !`)
    });
 
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    
    if(command == 'pravila'){
        client.commands.get('pravila').execute(message, args, Discord);
    } 
    if(command == 'kick'){
        client.commands.get('kick').execute(message, args,);
    } 
    if(command == 'ban'){
        client.commands.get('ban').execute(message, args,);
    } 
    if(command == 'tiket'){
        client.commands.get('tiket').execute(message, args,);
    } 
    if(command == 'clear'){
        client.commands.get('clear').execute(message, args,);
    } 
    if(command == 'mute'){
        client.commands.get('mute').execute(message, args,);
    } 
    if(command == 'unmute'){
        client.commands.get('unmute').execute(message, args,);
    }
    if (command === 'reakcija') {
        client.commands.get('reakcija').execute(message, args, Discord, client);
    }  
    if (command === 'obavestenje') {
        client.commands.get('obavestenje').execute(message, args, Discord, client);
    }  
    
    
});
 
client.login(process.env.TOKEN);
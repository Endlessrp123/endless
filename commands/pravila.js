module.exports = {
    name: 'pravila',
    description: "Embeds!",
    execute(message, args, Discord) {

     const NewEmbed = new Discord.MessageEmbed()
	 .setColor('#05ffa1')
	 .setTitle('Pravila')
	 .setURL('https://discord.gg/TJmjw7uZ')
	 .setDescription('Fudji ti stavi sta zelis u opisu da pise !')
	 .addFields(
		{ name: 'Pravilo 1', value: 'Nema psovanja' },
		{ name: 'Pravilo 2', value: 'Nema vredjanja po bilo cemu npr nacionalnosti, debljini, slici itd...', inline: true },
		{ name: 'Pravilo 3', value: 'Zabranjeno saradjivati sa drugim mafijama!', inline: true },
		{ name: 'Pravilo 4', value: 'Svi policajci su korumpirani, sto znaci da ne smete da nas hapsite ili slc!', inline: true },
	 )
	 .setImage('https://imgur.com/a/WJemQtp')
	 .setFooter('Svi postujte i budite deo Familije!',);

       message.channel.send(NewEmbed);
    }
}
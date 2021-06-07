module.exports = {
    name: 'clear',
    description: "Brisanje poruka!",
    async execute(message, args){
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nemas pravo da ovo koristis!")

        if (!args[0]) return message.reply("Unesi broj poruka koliko zelis da se ocisti!");
 
        if(isNaN(args[0])) return message.reply("Upisi pravi broj!");
 
        if(args[0] > 100) return message.reply("Ne mozes vise od 100 poruka!");
        
        if(args[0] < 1) return message.reply("Mozes najmanje 1 poruku da obrises!");
 
        await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
    });
 
 }
}   
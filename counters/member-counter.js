module.exports = async (client) =>{
    const guild = client.guilds.cache.get('839588189022191616');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('840152916756004874');
        channel.setName(`🏆 Ukupno clanova : ${memberCount.toLocaleString()}`);
        console.log('Rifresanje u toku...');
    }, 5000);
}
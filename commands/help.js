module.exports = {
    name: 'help',
    description: "List of Helpful Commands!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff000d')
            .setTitle('Apex Commands')
            .setAuthor('Apex Utilities', 'https://i.imgur.com/XvxhlJZ.png')
            .setDescription('Prefix [/]')
            .setThumbnail('https://i.imgur.com/XvxhlJZ.png')
            .addFields(
                { name: '/Ticket', value: 'Open', inline: true },
                { name: '/Suggest', value: 'Your Idea', inline: true },
            )
            .addField('/Code', 'Realm Info', true)
            .addFields(
                { name: '/Meme', value: 'Random', inline: true },
                { name: '/Store', value: 'Cosmetics', inline: true },
            )
            .addField('/Update', 'Latest', true)
            .setTimestamp()
            .setFooter('/Help', 'https://i.imgur.com/XvxhlJZ.png');

        message.channel.send(newEmbed);
    }

}
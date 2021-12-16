module.exports = {
    name: 'staff',
    description: "List of Staff Commands!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff000d')
            .setTitle('Staff Commands')
            .setAuthor('Apex Utilities', 'https://i.imgur.com/XvxhlJZ.png')
            .setDescription('Prefix [/]')
            .setThumbnail('https://i.imgur.com/XvxhlJZ.png')
            .addFields(
                { name: '/Ban', value: 'Player', inline: true },
                { name: '/Kick', value: 'Player', inline: true },
            )
            .addField('/Clear', 'Messages', true)
            .addFields(
                { name: '/Poll', value: 'Topic', inline: true },
                { name: '/Mute', value: 'User', inline: true },
            )
            .addField('/Unmute', 'User', true)
            .setTimestamp()
            .setFooter('/Staff', 'https://i.imgur.com/XvxhlJZ.png');

        message.channel.send(newEmbed);
    }

}
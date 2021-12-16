module.exports = {
    name: 'suggest',
    description: "Share your idea!",
    execute(client, message, args, Discord) {
        const channel = message.guild.channels.cache.find(c => c.name === '📬〡suggestions');
        if (!channel) return message.channel.send('📬〡suggestions channel does not exist!');

        let messageArgs = args.join(' ');
        const embed = new Discord.MessageEmbed()
            .setColor('#ff000d')
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(messageArgs)
            .setTimestamp()
            .setFooter('/Suggest', 'https://i.imgur.com/XvxhlJZ.png');

        channel.send(embed).then((msg) => {
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err) => {
            throw err;
        });
    }
}
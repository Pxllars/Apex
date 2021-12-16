module.exports = {
    name: 'poll',
    description: "Creates a poll!",
    permissionError: 'You must be an administrator to use this command.',
    permissions: ['ADMINISTRATOR'],
    execute(client, message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const channel = message.guild.channels.cache.find(c => c.name === '📣〡news');
            if (!channel) return message.channel.send('📣〡news channel does not exist!');

            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
                .setColor('#ff000d')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(messageArgs)
                .setDescription('Do You Think **' + messageArgs + '** Could Be Useful? \n\nAnswer With 👍/👎 Below!')
                .setTimestamp()
                .setFooter('/Poll', 'https://i.imgur.com/XvxhlJZ.png');

            channel.send(embed).then((msg) => {
                msg.react('👍');
                msg.react('👎');
                message.delete();
            }).catch((err) => {
                throw err;
            });
        }
    }
}
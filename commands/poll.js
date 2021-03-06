module.exports = {
    name: 'poll',
    description: "Creates a poll!",
    permissionError: 'You must be an administrator to use this command.',
    permissions: ['ADMINISTRATOR'],
    execute(client, message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const channel = message.guild.channels.cache.find(c => c.name === 'π£γ‘news');
            if (!channel) return message.channel.send('π£γ‘news channel does not exist!');

            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
                .setColor('#ff000d')
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(messageArgs)
                .setDescription('Do You Think **' + messageArgs + '** Could Be Useful? \n\nAnswer With π/π Below!')
                .setTimestamp()
                .setFooter('/Poll', 'https://i.imgur.com/XvxhlJZ.png');

            channel.send(embed).then((msg) => {
                msg.react('π');
                msg.react('π');
                message.delete();
            }).catch((err) => {
                throw err;
            });
        }
    }
}
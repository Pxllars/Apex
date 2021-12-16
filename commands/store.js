module.exports = {
    name: 'store',
    description: "The Apex Store!",
    execute(client, message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
            .setColor('#ff000d')
            .setTitle('Apex Store')
            .setAuthor('Apex Utilities', 'https://i.imgur.com/XvxhlJZ.png')
            .setDescription(' \n \n**💸 Payments Accepted Via**\n__PayPal & Gift Cards__ \n\n\n⭐ ***CRATES***\n\n***Iron Key*** *-* __$3__\n***Gold Key*** *-* __$5__\n***Diamond Key*** *-* __$10__\n\n\n⭐ ***KITS***\n\n***Exert Kit*** *-* __$5__\n***Oasis Kit*** *-* __$10__\n***Inlet Kit*** *-* __$25__\n***Inlet Kit*** *-* __$35__\n***Apex Kit*** *-* __$50__\n\n\n⭐ ***COSMETICS***\n\n***Ender Cape*** *-* __$3__\n***Solar Cape*** *-* __$5__\n***Apex Cape*** *-* __$10__\n\n\n⭐ ***APEX+***')
            .addFields(
                { name: 'x50 Tokens', value: 'Receive Weekly!' },
                { name: 'Apex+ Cape', value: 'Exclusive Cape' },
                { name: 'x2 Apex+ Key', value: 'Donation Key' },
                { name: 'Custom Role', value: 'Apex+ Discord Role' },
                { name: 'Apex+ Rank', value: 'In-Game Rank' }
            )
            .setTimestamp()
            .setFooter('/Store', 'https://i.imgur.com/XvxhlJZ.png');

        message.channel.send(newEmbed);
    }

}
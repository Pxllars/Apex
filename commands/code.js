module.exports = {
    name: 'code',
    description: 'Sends KitPvP Codes!',
    execute(client, message, args, Discord) {
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#ff000d')
        .setTitle('**Apex Utilities**')
        .setDescription('***Code has been sent to you!***')

        message.channel.send(newEmbed1);

        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ff000d')
        .setTitle('**Apex Codes**')
        .setDescription('\n\n**━━━━━━━━━━━━━━━**\n__*Apex Discord Kit Code!*__\n\n **A**  B  C \n|━━━|\n  D  **E**  F \n|━━━|\n  G  **H**  I \n\n*In The Chest Labeled*\n**Discord Kit**\n*Press the Items Labeled:*\n**A/E/H**\n*Then Redeem your Kit!*\n\n\n**https://realms.gg/FgMd8nZrGcg**\n━━━━━━━━━━━━━━━')

        message.author.send(newEmbed);
    }

}
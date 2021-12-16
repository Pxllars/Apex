module.exports = {
    name: 'verify',
    description: "Verify Members!!",
    async execute(client, message, args, Discord) {
        const channel = '915108221339979831';
        const yellowTeamRole = message.guild.roles.cache.find(role => role.name === "Default");
 
        const yellowTeamEmoji = '🔒';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ff000d')
            .setTitle('Select "🔒" to verify!')
            .setDescription('Clicking the emoji will authorize your access to Apex!\n\n'
                + `${yellowTeamEmoji} to Verify!`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(yellowTeamEmoji);
        
        
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(yellowTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
	console.log(client.user.username, client.user.id)
	client.guilds.map( function (g) {
		console.log(g.name)
	})

	console.log(__dirname)
	console.log(__filename)
});

var testMessage;

client.on('messageReactionAdd', function (messageReaction, user) {
	const message = messageReaction.message
	const emoji = messageReaction.emoji

	message.edit(message.contents + messageReaction.emoji)
	  .catch(console.error('??'));

})

client.on('message', message => {

	if (message.content === 'ping' && message.author.id === client.user.id) {
		console.log(message.guild.name, message.author.username, message.author.id, message.content)
		// message.reply('pong');
		message.edit(message.content + ' pong')

	}

	if (message.content.startsWith('/eval') && message.author.id === client.user.id) {
		console.log(message.guild.name, message.author.username, message.author.id, message.content)
		message.reply( eval( message.content.replace(/(\/eval )/g, '') ) )
		// message.reply('test')
	}

	if (message.content === 'emoji-test' && message.author.id === client.user.id) {
		console.log(message.author.username, message.author.id, message.content)
		// message.reply('pong');
		testMessage = message;
	}
});

// bot id 295472669498015744
// usr id 160150525315121153

client.login('MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY');

// bot token Mjk1NDcyNjY5NDk4MDE1NzQ0.C7kYUw.X5RphqIuivRYfGU9UovPtYo_mXQ
// usr token MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY

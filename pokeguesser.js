const Discord = require( "discord.js" )
const client = new Discord.Client()

const secrets = require( "secrets" )


module.exports = {
	userToken:
}

client.on( "ready", () => {
	console.log( `Logged in as ${ client.user.tag }!` )
	// console.log( `Logged in as ${client.user.tag}!` )
	// client.user.setGame( "with my code" )
	// client.user.setActivity( "tooot", {
	// 	url: "https://www.twitch.tv/boxtrain",
	// 	type: "LISTENING", // playing stremaing listening watching
	// } )
	client.user.setPresence( {
		// status: "dnd", // online idle invisible dnd
		// afk: false,
		game: {
			name: "rrrr",
			// url: "https://www.twitch.tv/boxtrain",
			url: "boxtrain",
			type: "LISTENING",
		},
	} )
} )

// channel.sendMessage('hello!')
//  .then(message => console.log(`Sent message: ${message.content}`))
//  .catch(console.error);

message.author.bot

client.on( "message", msg => {
	if ( msg.content.startsWith( "You are now playing" ) ) {
		msg.guild
	}

	if ( msg.content === "ping" ) {
		msg.reply( "Pong!" )
	} else if ( msg.content === "avatar" ) {
		msg.reply( msg.author.avatarURL )
	}
} )

client.login( secrets.userToken )

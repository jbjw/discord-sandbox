const Discord = require( "discord.js" )
const client = new Discord.Client()

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
	var msgSplit = msg.content.split( " " )
	// if ( msg.content.startsWith( "yo bot" ) ) {
	if ( msgSplit[ 0 ] === "yo" && msgSplit[ 1 ] === "bot" ) {
		var command = msgSplit[ 2 ]
		switch ( command ) {
			case "wtp":
				test
				break
		}

	}
	
	if ( msg.content === "ping" ) {
		msg.reply( "Pong!" )
	} else if ( msg.content === "avatar" ) {
		msg.reply( msg.author.avatarURL )
	}
} )

// client.login( "MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY" )
client.login(
	"Mjk1NDcyNjY5NDk4MDE1NzQ0.C7kYUw.X5RphqIuivRYfGU9UovPtYo_mXQ"
)

// bot id 295472669498015744
// bot token Mjk1NDcyNjY5NDk4MDE1NzQ0.C7kYUw.X5RphqIuivRYfGU9UovPtYo_mXQ

// usr id 160150525315121153
// usr token MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY

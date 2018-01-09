const Discord = require( "discord.js" )
const client = new Discord.Client()

client.on( "ready", () => {
	console.log( `Logged in as ${ client.user.tag }!` )
	// console.log( `Logged in as ${client.user.tag}!` )
} )

client.on( "message", msg => {
	if ( msg.content === "ping" ) {
		msg.reply( "Pong!" )
	} else if ( msg.content === "avatar" ) {
		msg.reply( msg.author.avatarURL )
	}
} )

client.login( "MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY" )

// bot id 295472669498015744
// bot token Mjk1NDcyNjY5NDk4MDE1NzQ0.C7kYUw.X5RphqIuivRYfGU9UovPtYo_mXQ

// usr id 160150525315121153
// usr token MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY

client.login( "MTYwMTUwNTI1MzE1MTIxMTUz.C7kJ_w.05cIDUTbc7tu8Xkny1Oiubv4dQY" )

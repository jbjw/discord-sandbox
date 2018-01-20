const Discord = require( "discord.js" )
const client = new Discord.Client()

const secrets = require( "./secrets" )


const https = require('https');

client.on( "ready", () => {

	console.log( `Logged in as ${ client.user.tag }!` )
	// client.user.setGame( "with my code" )
	// client.user.setActivity( "tooot", {
	// 	url: "https://www.twitch.tv/boxtrain",
	// 	type: "LISTENING", // playing stremaing listening watching
	// } )
	// client.user.setPresence( {
	// 	// status: "dnd", // online idle invisible dnd
	// 	// afk: false,
	// 	game: {
	// 		name: "rrrr",
	// 		// url: "https://www.twitch.tv/boxtrain",
	// 		url: "boxtrain",
	// 		type: "LISTENING",
	// 	},
	// } )
} )

// channel.sendMessage('hello!')
//  .then(message => console.log(`Sent message: ${message.content}`))
//  .catch(console.error);

// message.author.bot

var ready = false
var wtpMsg

client.on( "message", msg => {
	if ( ready ) {
		msg.channel.fetchMessages( {
			limit: 1,
			after: wtpMsg.id,
		} ).then( messages => {
			if ( messages.first().attachments.first() ) {
				console.log( "msg with attachment" )
				var filename = messages.first().attachments.first().filename
				var i = filename.indexOf( "." )
				var id = filename.slice( 0, i )
				console.log( id )
				var url = `https://pokeapi.co/api/v2/pokemon/${ id }/`
				https.get( url, (resp) => {
					let data = ''
					resp.on('data', (chunk) => {
						data += chunk;
					})
					resp.on('end', () => {
						var name = JSON.parse( data ).name
						console.log( "name", name )
						ready = false
						msg.channel.send( name )
					})
				}).on("error", (err) => {
					console.log("Error: " + err.message);
				})
			}
		} )
		.catch( console.error )
	} else {
		if ( msg.content.startsWith( "You are now playing" ) ) {
			console.log( "not ready and wtp detected, readying" )
			ready = true
			wtpMsg = msg
		}
	}

} )

client.login( secrets.userToken )

// const https = require('https');
//
// https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
//   let data = '';
//
//   // A chunk of data has been recieved.
//   resp.on('data', (chunk) => {
//     data += chunk;
//   });
//
//   // The whole response has been received. Print out the result.
//   resp.on('end', () => {
//     console.log(JSON.parse(data).explanation);
//   });
//
// }).on("error", (err) => {
//   console.log("Error: " + err.message);
// });

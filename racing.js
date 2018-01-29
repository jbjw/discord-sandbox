//

"use strict"

const discord = require( "discord.js" )
const https = require( "https" )

const secrets = require( "./secrets" )

const client = new discord.Client()

client.on( "ready", () => {

} )



function Board( numLanes, distance ) {
	// this.lanes = []
	this.racers = []
	this.distance = distance
	this.numLanes = numLanes
	for ( let i = 0; i < numLanes; i++ ) {
		// this.racers.push( new Racer(  ) )
	}
}

Board.prototype.tick = function () {
	for ( let racer of this.racers ) {
		racer.pos += 1
	}
}

Board.prototype.addRacer = function ( racer, lane ) {
	var cand = this.racers[ lane ]
	if ( cand ) {
		//
	} else {
		this.racers[ lane ] = racer
	}
}

Board.prototype.toString = function () {
	var str = ""
	for ( let i = 0; i < this.numLanes; i++ ) {
		var racer = this.racers[ i ]
		if ( racer ) {
			var tmp = "-".repeat( this.distance )
			// str = str + "-".repeat( this.distance ) + "\n"

			str = str + tmp.slice( 0, racer.pos ) + racer.char + tmp.slice( racer.pos ) + "\n"
		} else {
			str = str + "-".repeat( this.distance ) + "\n"
		}
	}
	return str
}

function Racer( char ) {
	this.pos = 0
	this.char = char
}

var board = new Board( 4, 60 )

var r1 = new Racer( "a" )
board.addRacer( r1, 0 )

for ( let i = 0; i < 10; i++ ) {
	console.log( board.toString() )
	board.tick()
}

client.on( "message", msg => {
	var args = msg.content.split( " " )
	var arg0 = args[ 0 ]
	if ( arg0 === "gamesbot" ) {
		var arg1 = args[ 1 ]
		if ( msgSplit1 === "" ) {

		} else if ( msgSplit1 === "race" ) {
			if
		} else if ( msgSplit1 === "y" ) {

		} else if ( msgSplit1 === "z" ) {

		} else if ( msgSplit1 === "x" ) {

		} else {
			// command not recognized
		}
	}

	// msg.channel.fetchMessages( {
	// 	limit: 1,
	// 	after: msgid,
	// } ).then( messages => {
	// 	// messages, messages.first()
	// } )
	// .catch( console.error )
} )

// client.login( secrets.botToken )
client.login( secrets.userToken )

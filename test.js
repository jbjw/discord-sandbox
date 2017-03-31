class Test {
	constructor() {
		console.log('constructed')
		console.log(this)
		let test = ['a', 'b', 'c']
		test.map( () => {
			console.log(this)
		})
	}
}

new Test()

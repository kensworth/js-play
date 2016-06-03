'use strict'
var promise = new Promise(function(resolve, reject) {
	console.log('doing something')
	let example = 1
	if(example === 1) {
		resolve('it worked')
	}
	else {
		reject(Error('it broke'))
	}
})

promise.then(function(result) {
	console.log(result)
}, function(err) {
	console.log(err)
})

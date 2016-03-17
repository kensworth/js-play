var x = 9
var module = {
    x: 81,
    getX: function() {
       return this.x
    }
}
console.log('original:')
console.log(module.getX())

var retrieveX = module.getX
console.log('retrieval:')
console.log(retrieveX())
// bind returns a function, whereas call and apply just call it 
var boundGetX = module.getX.bind(module)
console.log('bound:')
console.log(boundGetX())

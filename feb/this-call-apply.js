var name = 'john'
var obj = {
    name: 'bob',
    property: {
        name: 'jane',
        getName: function() {
            return this.name
        }
    } 
}
console.log(obj.property.getName())
var test = obj.property.getName
console.log(test.call(obj.property))

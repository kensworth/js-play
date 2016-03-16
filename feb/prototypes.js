const food = {
    init: function(type) {
        this.type = type
    },
    eat: function() {
        console.log('you ate the ' + this.type)
    }
}
food.init('waffle')
food.eat()
// object.create does not create a copy of the food object, but instead creates an empty object for each, and uses food as a fallback, so whenever we call a method that isn't declared explicitly in the object, it will look in its prototype and use that instead.
const waffle = Object.create(food)
waffle.init('waffle')
waffle.eat()
// if you don't call waffle.init to define a this.type, then waffle will look back to its prototype. Therefore if you set food.type = 'blah' waffle.eat will output 'you at the blah' instead of 'you ate the undefined'
const carrot = Object.create(food)
carrot.init('carrot')
carrot.eat()

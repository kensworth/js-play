// shape superclass
function Shape() {
    this.x = 0
    this.y = 0
}
// superclass method
Shape.prototype.move = function(x, y) {
    this.x += x
    this.y += y
    console.log('shape moved')
}
// rectangle subclass
function Rectangle() {
    Shape.call(this)
}
// subclass extends superclass
// creates a new object with specified prototype. That way it's a pass by value, not reference
Rectangle.prototype = Object.create(Shape.prototype)
Rectangle.prototype.constructor = Rectangle

var rect = new Rectangle()
console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle);// true
console.log('Is rect an instance of Shape?', rect instanceof Shape);// true
rect.move(1, 1); // Outputs, 'Shape moved.'


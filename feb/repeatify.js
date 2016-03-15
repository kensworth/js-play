'use strict'
String.prototype.repeatify = String.prototype.repeatify || function(number) {
    let string = ''
    for(let i = 0; i < number; i++) {
        string += this
    }
    return string
}
console.log('hello'.repeatify(3));

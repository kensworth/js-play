'use strict'
let dragon = (name, size, element) =>
    name + ' is a ' + 
    size + 'dragon that breathes ' + 
    element + '!'

console.log(dragon('fluffy', 'tiny', 'lightning'))

let wyrm = 
    name =>
        size =>
            element =>
                name + ' is a ' + 
                size + ' dragon that breathes ' + 
                element + '!'

let floofyWyrm = wyrm('floofy')('small')('fire')

console.log(floofyWyrm)


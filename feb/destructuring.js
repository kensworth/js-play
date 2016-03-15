/*var animal = {
    species: 'dog',
    weight: 23,
    sound: 'woof'
}

var {species, sound} = animal
console.log('The ' + species + ' says ' + sound + '!')*/

makeSound({
    weight: 23,
    sound: 'woof'
})

function makeSound(options) {
    options.species = options.species || 'animal'
    console.log('The ' + options.species + ' says ' + options.sound + '!')
}

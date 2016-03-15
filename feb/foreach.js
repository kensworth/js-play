'use strict'
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
/*a.forEach(function(value) {
    console.log(value)
})*/

function log(value, index) {
    console.log(value + ' ' + index)
}

a.forEach(log)

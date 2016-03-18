(function() {
    'use strict'
    for(let i = 0; i < 5; i++) {
        (n => setTimeout(function() { console.log(n) }, n * 1000))(i)
    }
})()

var fs = require('fs')
// When we pass a callback function as an argument to another function, we are only passing the function definition. We are not executing the function in the parameter.
// And since the containing function has the callback function in its parameter as a function definition, it can execute the callback anytime.
// When we pass a callback function as an argument to another function, the callback is executed at some point inside the containing function’s body just as if the callback were defined in the containing function. This means the callback is a closure.

function getBears(filepath, done) {
    fs.readFile(filepath, function(err, bears) {
        if(err) return done(err)

        fs.readFile('bears.dictionary', function(err, dict) {
            if(err) return done(err)

             compareBears(bears, dict)   
        })
    })
    //this gets hoisted up
    function compareBears(bears, dict) {
        dict = dict.toString().split('\n')
        bears = bears.toString().split('\n')
            .filter(function(bear) {
                return dict.indexOf(bear) !== -1
            }) 
        done(null, bears)
    }
}

getBears('bears.txt', function(err, bears) {
    console.log(bears)
})

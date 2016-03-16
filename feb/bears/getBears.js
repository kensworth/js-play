var fs = require('fs')

function getBears(filepath, done) {
    fs.readFile(filepath, function(err, bears) {
        if(err) return done(err)

        fs.readFile('bears.dictionary')
    })
}

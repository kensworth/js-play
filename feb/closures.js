function create() {
    var counter = 0
    return {
        increment: function() {
            counter++
        },
        print: function() {
            console.log(counter)
        }
    }
}

var c = create()
c.increment()
c.print()

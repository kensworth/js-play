(function() {
    'use strict'
    /*
    let output = (x => {
        //delete x
        // this would not delete x since x is not a property of an object, but rather a local varialbe
        console.log(x)
        return x
    })(0)

    let x = {foo: 1}
    let outputX = (_ => {
        console.log(x)
        delete x.foo
        console.log(x)
        return x.foo
    })()
    */
    function y(num) {
        this.num = num
    } 
    y.prototype = {
        print: function() { 
            console.log(this.num)
        },
        add: function() {
            this.num++
        }
    }
    var z = Object.create(y.prototype)
    z.num = 1
    z.print()
    z.add()
    z.print()    

    function w(num) {
        this.num = num
    }
    w.prototype = {
        print: function() { 
            console.log(this.num)
        },
        add: function() {
            this.num++
        }
    }     
    var x = new w(4)
    x.print()
    x.add()
    x.print()
})()

(function() {
    'use strict'
    let mul = 
        num => 
            num2 => 
                num3 => num * num2 * num3
    console.log(mul(2)(3)(4))
})()

'use strict'
let test = _ => {
    // console.log(a) a is undefined here because both variables and functions are hoisted
    // to the top of the function, but only the declarations are hoisted.
    // it's more like 'let a' instead of what you intuitively would think, 'let a = 1'
    // similarly, since foo() was declared 'let foo = _ =>' we get 'let foo' instead, due to anonymity
    // console.log(foo())

    let a = 1
    let foo = _ => {
        return 2
    }
}
test()

let test2 = _ => {
    let a = 1
    console.log(a)    
    console.log(foo2())
    function foo2() {
        return 'hello'
    }
}
test2()

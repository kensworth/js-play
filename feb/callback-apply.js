(function() {
    'use strict'
    let func = (firstName, lastName, callback, callbackObj) => {
    // do stuff
    console.log('doing stuff')  
    callback.apply(callbackObj, [firstName, lastName])
    callback.call(callbackObj, firstName, lastName)
    }
    let callbackFunc = (firstName, lastName) => console.log('hi ' + firstName + ' ' + lastName)
    func('master', 'yoda', callbackFunc, {})
})()

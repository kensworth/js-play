'use strict'
let arr = [1,2,3]
const greeting = arr => {
    if(Object.prototype.toString.call(arr) === '[object Array]') console.log('array!')
}
greeting(arr)
let str = 'hello'
console.log(Object.prototype.toString.call(str))
let five = 5
console.log(Object.prototype.toString.call(five))
let obj = {}
console.log(Object.prototype.toString.call(obj))

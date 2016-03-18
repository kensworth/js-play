(function() {
    'use strict'
    Array.prototype.equals = Array.prototype.equals || function(word2) {
        for(let i = 0; i < word2.length; i++) {
            if(this[i] !== word2[i]) return false
        }
        return true
    }
    function isAnagram(word1, word2) {
        if(word1.length !== word2.length) return false
        word1 = word1.split('')
        word2 = word2.split('')
        let sorted1 = word1.sort()
        let sorted2 = word2.sort()
        return sorted1.equals.call(sorted1, sorted2)
    }
    console.log(isAnagram('hello', 'elloh'))
    console.log(isAnagram('yellow', 'elzloh'))   
})()

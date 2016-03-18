function palindrome(word) {
    for(var i = 0; i < word.length / 2; i++ ) {
        if(word[i] !== word[word.length - i - 1]) return false
    }
    return true
}
console.log(palindrome('racecar'))
console.log(palindrome('abba'))
console.log(palindrome('hello'))

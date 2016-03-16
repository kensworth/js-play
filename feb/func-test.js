function test1() {
    var output = 'hi'
    console.log('1st ' + output)
    function test2() {
        var output2 = 'bye'
        console.log('2nd ' + output + output2)
        function test3() {
            var output3 = 'thirdio'
            console.log('3rd ' + output + output2 + output3)
        }
        test3()
    }
    test2()
}
test1()

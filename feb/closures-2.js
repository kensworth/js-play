var globalVar = "xyz";
(function firstFunc(firstArg) {
    var firstVar = 'first';
    (function outerFunc(outerArg) {
      var outerVar = 'a';
      
      (function innerFunc(innerArg) {
        var innerVar = 'b';
        
        console.log(
          "first = " + firstArg + " " + firstVar + " " +
          "outerArg = " + outerArg + "\n" +
          "innerArg = " + innerArg + "\n" +
          "outerVar = " + outerVar + "\n" +
          "innerVar = " + innerVar + "\n" +
          "globalVar = " + globalVar);
        
      })(456);
    })(123);
})(111);

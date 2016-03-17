 var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);

     var salary = "5000$";

     console.log("My New Salary " + salary);
 })();

function sal() {
	console.log('Original 2 ' + salary)
}
sal()
var sal3 = function() {
	console.log('Original 3 ' + salary)
}
sal3()

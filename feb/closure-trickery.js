 var salary = "1000$";

 (function () {
     console.log("Original salary was " + salary);
	 // the salary declaration below here is hoisted to the top of the function, so salary no longer points to the original variable in the parent scope, but rather the local one, which has yet to be defined
     var salary = "5000$";

     console.log("My New Salary " + salary);
 })();

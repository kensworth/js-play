var nums = [
	{name: '1', species: 'one'},
	{name: '2', species: 'two'},
	{name: '3', species: 'one'},
	{name: '4', species: 'two'},
	{name: '5', species: 'one'}
]

var isOne = function(num) {
	return num.species === 'one'
}
var one = nums.filter(isOne)
console.dir(one)

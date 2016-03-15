function func() {
    return arguments.callee;
}
console.log(func())


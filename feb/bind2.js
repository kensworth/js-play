(function() {
    'use strict'
    let x = 9
    let module = {
        x: 81,
        getX: _ => this.x
    }
    console.log('original:')
    module.getX()

    let retrieveX = module.getX
    console.log('retrieval:')
    retrieveX()
    // bind returns a function, whereas call and apply just call it 
    let boundGetX = module.getX.bind(module)
    console.log('bound:')
    boundGetX()
})()

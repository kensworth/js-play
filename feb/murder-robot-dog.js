'use strict'
const barker = (state) => ({
    bark: () => console.log('Woof, I am ' + state.name)
})

const driver = (state) => ({
    drive: () => state.position += state.speed
})

const killer = (state) => ({
    kill: () => console.log('killed')
})

barker({name: 'karo'}).bark()

const murderRobotDog = (name) => {
    let state = {
        name,
        speed: 100,
        position: 0
    }
    return Object.assign(
        {},
        barker(state),
        driver(state),
        killer(state) 
    )
}

let sniffles = murderRobotDog('sniffles')
sniffles.bark()
sniffles.kill()

// VROEM VROEM!
input.onButtonPressed(Button.A, function () {
    rijden = !(rijden)
    if (rijden) {
        basic.showString("GO!")
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
// Takel toetert!
input.onButtonPressed(Button.AB, function () {
    rijden = false
    music.playTone(880, 200)
    music.playTone(660, 400)
    basic.showString("TOET!")
})
// Stoppen
input.onButtonPressed(Button.B, function () {
    rijden = false
    music.stopAllSounds()
    basic.showIcon(IconNames.Happy)
})
let rijden = false
// Het gezicht van Takel
basic.showLeds(`
    . # . # .
    . # . # .
    . . # . .
    # # # # #
    . # # # .
    `)
// Motorgeluid zolang Takel rijdt
basic.forever(function () {
    if (rijden) {
        // Motor gaat hoger en lager in toon
        music.playTone(150, 200)
        music.playTone(220, 200)
        music.playTone(300, 200)
        music.playTone(220, 200)
    } else {
        basic.pause(100)
    }
})

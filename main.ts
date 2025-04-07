let roll = 0
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 5; index++) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(0.75)
    }
    roll = randint(1, 6)
    if (roll == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(330)
        }
    } else {
    	
    }
    if (roll == 2) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . #
                `)
            basic.pause(330)
        }
    } else {
    	
    }
    if (roll == 3) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                # . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . #
                `)
            basic.pause(330)
        }
    } else {
    	
    }
    if (roll == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . . . .
                . . . . .
                # . . . #
                `)
            basic.pause(330)
        }
    } else {
    	
    }
    if (roll == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                # . . . #
                . . . . .
                . . # . .
                . . . . .
                # . . . #
                `)
            basic.pause(330)
        }
    } else {
    	
    }
    if (roll == 6) {
        basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
        basic.pause(400)
        for (let index = 0; index < 3; index++) {
            basic.clearScreen()
            basic.pause(330)
            basic.showLeds(`
                # . . . #
                . . . . .
                # . . . #
                . . . . .
                # . . . #
                `)
            basic.pause(330)
        }
    } else {
    	
    }
})

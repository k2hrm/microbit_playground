input.onButtonPressed(Button.A, function () {
    music.playMelody("D D C C C C - C ", 240)
    music.playMelody("D - C C C - - C ", 240)
    music.playMelody("B B C5 B B B A A ", 240)
    music.playMelody("G G G G - - C D ", 240)
    music.playMelody("E - E - E - F - ", 240)
    music.playMelody("E E C - C C - C ", 240)
    music.playMelody("B B C5 B - B C5 B ", 240)
    music.playMelody("C5 C5 C5 C5 - - - - ", 240)
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("A E C E A E C E ", 240)
    music.playMelody("F C F G A F C F ", 240)
    music.playMelody("D B G B G D B G ", 240)
    music.playMelody("C5 A E A G D B G ", 240)
    music.playMelody("A E C E A E C E ", 240)
    music.playMelody("F C F G A F C F ", 240)
    music.playMelody("D B G B G D B G ", 240)
    music.playMelody("C5 A E A G D B G ", 240)
})
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # . # #
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        `)
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})

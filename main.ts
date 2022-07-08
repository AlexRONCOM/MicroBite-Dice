input.onButtonPressed(Button.A, function () {
    if (player1 > 0) {
    	
    } else {
        player1 = randint(1, 6)
        basic.showString("" + (player1))
    }
})
input.onButtonPressed(Button.B, function () {
    if (player1 == 0) {
    	
    } else {
        player2 = randint(1, 6)
        basic.showString("" + (player2))
        if (player1 > player2) {
            basic.showString("#1")
            scoreplayer1 += 1 + scoreplayer1
        } else {
            basic.showString("#2")
            scoreplayer2 += 1 + scoreplayer2
        }
        player2 = 0
        player1 = 0
        scoreplayer2 += 1 + scoreplayer1
    }
})
input.onGesture(Gesture.Shake, function () {
    if (scoreplayer1 > scoreplayer2) {
        basic.showString("#1 WIN")
    } else {
        basic.showString("#2 WIN")
    }
    scoreplayer1 = 0
    scoreplayer2 = 0
})
let player2 = 0
let player1 = 0
let scoreplayer2 = 0
let scoreplayer1 = 0
scoreplayer1 = 0
scoreplayer2 = 0
player1 = 0
player2 = 0

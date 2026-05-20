input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 F - D A - F C5 ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Silly)
})

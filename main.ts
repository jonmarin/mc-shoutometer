input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.pause(2000)
    while (input.buttonIsPressed(Button.AB)) {
        led.plotBarGraph(
        pins.analogReadPin(AnalogPin.P0) - 511,
        512
        )
    }
})

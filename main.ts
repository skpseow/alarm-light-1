input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 5; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
})
basic.forever(function () {
	
})

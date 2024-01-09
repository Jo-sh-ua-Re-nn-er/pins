input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    basic.setLedColor(0xff0080)
    basic.pause(5000)
    basic.setLedColor(0x000000)
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    basic.setLedColor(0x00ff00)
    basic.pause(5000)
    basic.setLedColor(0x000000)
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    basic.setLedColor(0xffff00)
    basic.pause(5000)
    basic.setLedColor(0x000000)
})
input.onPinTouchEvent(TouchPin.P3, input.buttonEventDown(), function () {
    basic.setLedColor(0x00ffff)
    basic.pause(5000)
    basic.setLedColor(0x000000)
})

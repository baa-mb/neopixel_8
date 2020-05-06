input.onButtonPressed(Button.AB, function () {
    dauerlauf = 1
})
input.onButtonPressed(Button.A, function () {
    dauerlauf = 1
    Helligkeit(3)
})
input.onButtonPressed(Button.B, function () {
    strip.clear()
    strip.show()
    dauerlauf = 0
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
})
function Helligkeit(hell: number) {
    range1.setBrightness(hell)
    range2.setBrightness(hell)
    range3.setBrightness(hell)
}
let range3: neopixel.Strip = null
let range2: neopixel.Strip = null
let range1: neopixel.Strip = null
let dauerlauf = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
dauerlauf = 1
range1 = strip.range(0, 3)
range2 = strip.range(5, 3)
range3 = strip.range(3, 2)
basic.forever(function () {
    if (dauerlauf) {
        range1.showColor(neopixel.colors(NeoPixelColors.Purple))
        basic.pause(500)
        range1.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        range1.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        range2.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        range2.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(500)
        range2.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        range3.showColor(neopixel.colors(NeoPixelColors.Indigo))
        basic.pause(500)
        range3.showColor(neopixel.colors(NeoPixelColors.Violet))
        basic.pause(500)
    } else {
        strip.rotate(1)
        strip.show()
        basic.pause(200)
    }
})

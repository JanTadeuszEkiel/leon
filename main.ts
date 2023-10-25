let Soil_Moisture = 0
basic.forever(function () {
    basic.showString("S= " + Soil_Moisture)
    basic.pause(1000)
})
basic.forever(function () {
    basic.pause(200)
    Soil_Moisture = pins.analogReadPin(AnalogPin.P1)
    serial.writeLine("" + (Soil_Moisture))
})

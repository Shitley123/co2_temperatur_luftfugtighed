wappsto.configureName("Air quality")
wappsto.configureNumberValue(
1,
"CO2 niveau",
"co2",
400,
10000,
1,
"ppm"
)
wappsto.configureValue(2, "Temperatur", WappstoValueTemplate.Temperature)
wappsto.configureNumberValue(
3,
"luftfugtighed",
"relative_humidity",
0,
100,
1,
"%"
)
let strip = neopixel.create(DigitalPin.P2, 7, NeoPixelMode.RGB)
strip.setBrightness(50)
basic.forever(function () {
    if (true) {
    	
    }
})

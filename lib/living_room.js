const Decor = require('./lamp');
const power = require('./power');
const powerLimits = require('./power_limits');

const myLamp = new Decor(10);

myLamp.turnOn();

console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);
power.surge(myLamp);
power.outage(myLamp);
myLamp.turnOn();

powerLimits.type;

powerLimits.maxBrightness;
console.log(`myLamp's current brightness: ${myLamp.currentBrightness}`);

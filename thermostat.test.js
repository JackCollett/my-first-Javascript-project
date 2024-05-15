// User Story: thermostat is set initially to 20 degrees, you can increase/decrease the
// thermostat with the up/down methods. the minimum possible temp in 10 degrees. Power 
// saving mode with is default set to on, allows temps to reach 25 degrees, but when
// set to off it can reach to 32 degrees. reset method resets temp to 20 degrees. 
// you can ask about the 'thermostat's current energy usage' <18 == 'low-usage', <=25 is 'medium-usage', anything else is 'high-usage'

const Thermostat = require('./thermostat.js')

describe('Thermostat', () => {
    const thermostat = new Thermostat();
    it('get initial temperature', () => {
        expect(thermostat.getTemperature()).toBe(20)
    });
    it('increase temp by 2', () => {
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22)
    })
    it('decrease temp by 1', () => {
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(21)
    })
    it('set power saving mode to off', () => {
        for (let i = 0 ; i < 10 ;  i++ ) {
            thermostat.up();
        }
        expect(thermostat.getTemperature()).toBe(25)
        thermostat.setPowerSavingMode(false)
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(26)
    })
    it('reset', () => {
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20)
    })
});
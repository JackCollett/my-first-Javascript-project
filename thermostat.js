class Thermostat {
    constructor () {
        this.temp = 20
        this.PSM = true
    }

    up() {
        if (this.temp < 25 && this.PSM == true) {
        this.temp += 1
        }
        else if (this.temp < 32 && this.PSM == false) {
        this.temp += 1
        }
    }
    
    down() {
        if(this.temp > 10) {
        this.temp -= 1
        }
    }

    getTemperature() {
        return this.temp
    }

    setPowerSavingMode(set) {
        if (set == true) {
            this.PSM = true
        }
        if (set == false) {
            this.PSM = false
        }
    }

    reset() {
        this.temp = 20
    }
};

const thermo = new Thermostat();

module.exports = Thermostat;

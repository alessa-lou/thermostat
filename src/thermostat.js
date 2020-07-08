'use strict';

class Thermostat{
    constructor() {
      this.temperature = 20;
      this.powersavingmodeon = true;
    }
    getCurrentTemperature() {
      return this.temperature;
    }
    up(){
      if (this.powersavingmodeon && this.temperature >= 25) {
        throw new Error('Power Saving Mode is on, maximum temperature reached');
      }
      if (this.temperature >= 32) {
        throw new Error('Maximum temperature reached');
      }
     this.temperature += 1
    }
    down(){
      if (this.temperature <= 10) {
        throw new Error('No');
      };
      this.temperature -= 1
    }

    reset(){
      this.temperature = 20
    }

    ispowersavingmodeon() {
      return this.powersavingmodeon;
    }

    psmoff() {
      this.powersavingmodeon = false;
    }


}

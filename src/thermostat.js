'use strict';

class Thermostat{
    constructor() {
      this.temperature = 20;
    }
    getCurrentTemperature() {
      return this.temperature;
    }
    up(){
     this.temperature += 1
    }
    down(){
      if (this.temperature <= 10) {
        throw new Error('No');
      };
      this.temperature -= 1
    }


}

'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("cannot go below 10 degrees", function() {
    var times = 10;
    for(var i=0; i < times; i++){
      thermostat.down();
    }
    console.log(thermostat.getCurrentTemperature());
    expect(function () { thermostat.down(); }).toThrowError('No');
  });

    describe("Up", function(){

      it("should increase temperature by 1", function(){
        thermostat.up();
        expect(thermostat.getCurrentTemperature()).toEqual(21);
      });

    });

    describe("Down", function(){

      it("should decrease temperature by 1", function(){
        thermostat.down();
        expect(thermostat.getCurrentTemperature()).toEqual(19);
      });

    });

    describe("Power Saving Mode", function(){

      it("should have a maximum temperature of 25 degrees", function(){
        var times = 5
        for(var i=0; i < times; i++){
          thermostat.up();
      }
        expect(function () { thermostat.up(); }).toThrowError('Power Saving Mode is on, maximum temperature reached');
      });

      it("should have maximum temperature of 32 degrees when off", function(){
        thermostat.powersavingmodeon = false;
        for(var i=0; i < 12; i++){
          thermostat.up();
        }
        expect(function () { thermostat.up();}).toThrowError('Maximum temperature reached');
      });

      it("is on by default", function(){
        expect(thermostat.ispowersavingmodeon()).toEqual(true);
      });

      it("can be turned off", function(){
        thermostat.psmoff();
        expect(thermostat.ispowersavingmodeon()).toEqual(false);
      });
    });

    describe("Reset", function() {
      it("resets the temperature to 20 degrees", function(){
        for (var i = 0; i < 4; i++) {
          thermostat.up();
        }
        thermostat.reset();
        expect(thermostat.getCurrentTemperature()).toEqual(20);
      });
    });

});

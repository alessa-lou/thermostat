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
    });

});

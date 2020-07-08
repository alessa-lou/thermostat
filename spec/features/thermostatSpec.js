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
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    thermostat.down();
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

});

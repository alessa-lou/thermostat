'use strict';

describe('Thermostat', function() {

  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("should start at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);
  });

describe("Up", function(){

  it("should increase temperature by 1", function(){
    thermostat.up();
    expect(thermostat.temperature).toEqual(21);
  });

});

});

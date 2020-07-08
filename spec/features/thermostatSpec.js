describe('Thermostat', function() {
  var thermostat;

  it("should start at 20 degrees", function() {
    thermostat = new Thermostat();
    expect(thermostat.temperature).toEqual(20);
  });

});
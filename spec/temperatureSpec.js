describe('temperature', function() {
  var thermostat;

  it('knows the temperature of the thermostat', function() {
    thermostat = new Thermostat();
    expect(thermostat).toRespondTo(temperature).with(20);
  });

});
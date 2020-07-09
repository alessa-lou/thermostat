$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);

  $('#up').click(function() {
  var thermostat = new Thermostat();
  console.log("click worked good job")
  thermostat.up();
  $('#temperature').text(thermostat.temperature);
});

$('#down').click(function() { // this is an alternate version of .on('click'), with a sprinkle of jQuery syntactic sugar
  var thermostat = new Thermostat();
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})

})

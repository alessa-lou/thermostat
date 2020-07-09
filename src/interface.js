$(document).ready(function() {
  var thermostat = new Thermostat();
  $('.temperature').text(thermostat.temperature);
})

console.log("right before click function")

console.log($("[name='up']"))

// $("[name='up']").on('click'(function() {
  $('.up').click(function() {
  console.log("click worked good job")
  thermostat.up();
  $('.temperature').text(thermostat.temperature);
})

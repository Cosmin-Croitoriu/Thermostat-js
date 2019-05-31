$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat.temperature);
  
  $('#temp-up').on('click', function() {
    thermostat.up();
    $('#temperature').text(thermostat.temperature);
  })

  $('#temp-down').click(function() {
  thermostat.down();
  $('#temperature').text(thermostat.temperature);
})
})

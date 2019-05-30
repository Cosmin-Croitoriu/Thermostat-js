"use strict";

describe("Thermostat", function(){
  var thermostat;
  beforeEach(function(){
   thermostat = new Thermostat;
  })
  it("starts at 20 degrees", function(){
    expect(thermostat._temperature).toBe(20);
  });

  it("the temperature can go up", function(){
    thermostat.up(20)
    expect(thermostat._temperature).toBe(40);
  });

  it('the temperature can go down', function() {
    thermostat.down(5)
    expect(thermostat._temperature).toBe(15);
  });

  it('has a minimum temperature of 10', function() {
    expect(thermostat._minimumTemperature).toBe(10);
  });

  it('has a maximum temperature', function() {
    thermostat.powerSaving
    expect(thermostat._maximumTemperature).toBe(32);
  });

  it('has a maximum temperature', function() {
    thermostat.powerSaving
    expect(thermostat._maximumTemperature).toBe(25);
  });
});
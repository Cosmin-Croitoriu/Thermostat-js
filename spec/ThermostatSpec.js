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
    thermostat.up()
    expect(thermostat._temperature).toBe(21);
  });

  it('the temperature can go down', function() {
    thermostat.down()
    expect(thermostat._temperature).toBe(19);
  });

  it('has a minimum temperature of 10', function() {
    thermostat._temperature = 10;
    expect(function(){thermostat.down();}).toThrow("Minimun temperature is 10");

  });

  it("has a reset function that fixes the temperature to 20", function(){
     thermostat.reset();
     expect(thermostat._temperature).toBe(20);
  });

 describe("powerModeSwitch", function(){

  it('has a switch', function(){
    thermostat.powerModeSwitch();
    expect(thermostat._powerSaving).toEqual(false); 
    thermostat.powerModeSwitch();
    expect(thermostat._powerSaving).toEqual(true);
  });

  it('has a maximum temperature when powersaving mode is on', function() {
    expect(thermostat._maximumTemperature).toBe(25);
  });

  it('has a maximum temperature when in powersaving mode is off', function() {
    thermostat.powerModeSwitch();
    console.log(thermostat._powerSaving)
    expect(thermostat._maximumTemperature).toEqual(32);
  });
 }); 
  
  describe("usage", function(){

   it("goes on low-usage", function(){
     thermostat._temperature = 17;
     expect(thermostat.usage()).toBe("low-usage");
   });

   it("goes on medium-usage", function(){
    thermostat._temperature = 20;
    expect(thermostat.usage()).toBe("medium-usage");
  });

  it("goes on high-usage", function(){
    thermostat._temperature = 26;
    expect(thermostat.usage()).toBe("high-usage");
  });
  });
});
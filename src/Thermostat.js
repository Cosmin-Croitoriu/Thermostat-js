function Thermostat(){
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._maximumTemperature = 32;
};

Thermostat.prototype.up = function(number){
  this._temperature += number;
};

Thermostat.prototype.down = function(number){
  this._temperature -= number;
};

Thermostat.prototype.powerSaving = function() {
  this._maximumTemperature;
};
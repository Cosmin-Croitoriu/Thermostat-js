function Thermostat(){
  this._temperature = 20;
  this._minimumTemperature = 10;
  this._powerSaving = true
  this._maximumTemperature = 25
};

Thermostat.prototype.up = function(){
  if(this._temperature > this._maximumTemperature) {
    throw "Maximum temperature reached bro!"
  };
  this._temperature++;
};

Thermostat.prototype.down = function(){
  this._temperature--;
  if(this._temperature < 10){
    throw "Minimun temperature is 10"
  };
};

Thermostat.prototype.powerModeSwitch = function() {

  if(this._powerSaving === true) {

    this._powerSaving = false;
    this._maximumTemperature = 32
     
  } else { 

    this._powerSaving = true;
    this._maximumTemperature = 25
   
  }; 
};

Thermostat.prototype.reset = function(){
  this._temperature = 20;
};
Thermostat.prototype.usage = function(){
  if(this._temperature < 18){
    return "low-usage";
  }else if(this._temperature < 25 ){
    return "medium-usage";
  }else{
    return "high-usage";
  }
  
};
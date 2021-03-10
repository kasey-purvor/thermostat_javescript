'use strict'

class Thermostat{
  constructor() {
    this.temp = 20;
    this.ps = true;
  }
  temp(){
    return this.temp();
  };
  
  up(){
    if((this.temp + 1 > 32) && this.ps === false) {
      throw new Error('Cannot set above 32 degreeeees in power save mode off');
    }
    if((this.temp + 1 > 25) && this.ps === true) {
      throw new Error('Cannot set above 25 degreeeees in power save mode');
    }
      this.temp += 1;
  };

  down() {
    if(this.temp - 1 < 10) {
      throw new Error('Cannot set below 10 degreeeees');
    };
    this.temp -= 1 ;
  };

  psOff(){
    this.ps = false;
  }

  psOn(){
    this.ps = true;
  }

  reset() {
    this.temp = 20;
  }

  readUsage() {
    if(this.temp < 18) {
      return 'low-usage';
    }
    if(this.temp <= 25) {
      return 'medium-usage';
    }
    else {
      return 'high-usage';
    };
  };


};

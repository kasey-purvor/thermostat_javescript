'use strict'

class Thermostat{

  constructor() {
    this.temp = 20;
    this.ps = true;
  }

  change(amount){
    if(this.temp + amount < 10) {
      throw new Error('Cannot set below 10 degreeeees');
    }
    if((this.temp + amount > 25) && this.ps === true) {
      throw new Error('Cannot set above 25 degreeeees in power save mode');
    }
    if((this.temp + amount > 32) && this.ps === false) {
      throw new Error('Cannot set above 32 degreeeees in power save mode off');
    }
      this.temp += amount;
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

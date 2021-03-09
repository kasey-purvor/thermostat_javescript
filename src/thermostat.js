'use strict'

class Thermostat{
  
  constructor() {
    this.temp = 20; 
  }
  
  change(amount){
    if(this.temp + amount < 10) {
      throw new Error('Cannot set below 10 degreeeees');
    }
    this.temp += amount;
  };
  
  
};

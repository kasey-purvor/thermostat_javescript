'use strict'

describe('Thermostat', function() {
  var thermostat;

  beforeEach(function() { 
    thermostat = new Thermostat;
  }) ;

  it('starts at 20 degrees celcius', function() {
    expect(thermostat.temp).toEqual(20);
  });
  
  it('can increase he temp with an up function', function() {
    thermostat.change(5);
    expect(thermostat.temp).toEqual(25);
  });
  
  it('can decrease the temp, with a down function', function() {
    thermostat.change(-5);
    expect(thermostat.temp).toEqual(15);
  });
  
  it('cannot be set at a temp lower than 10 ', function() {
    
    expect(function(){thermostat.change(-11);}).toThrow(new Error("Cannot set below 10 degreeeees"));
  });

});
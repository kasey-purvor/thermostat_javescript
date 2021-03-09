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
  it('cannot be set at a temp higher than 25 when power saving mode on ', function() {
    expect(function(){thermostat.change(6);}).toThrow(new Error("Cannot set above 25 degreeeees in power save mode"));
  });
  it('cannot be set at a temp higher than 32 when power saving mode off ', function() {
    thermostat.psOff();
    expect(function(){thermostat.change(13);}).toThrow(new Error("Cannot set above 32 degreeeees in power save mode off"));
    expect(function(){thermostat.change(12);}).not.toThrow(new Error("Cannot set above 32 degreeeees in power save mode off"));
  });

  describe('power saving mode', function() {
    it('is on by default', function() {
      expect(thermostat.ps).toBe(true);
    });
    it('can be switched off', function() {
      thermostat.psOff();
      expect(thermostat.ps).toBe(false);
    });
    it('can be switched back on', function() {
      thermostat.psOff();
      thermostat.psOn();
      expect(thermostat.ps).toBe(true);
    });
  });
  describe('reset', function() {
    it('sets the temperature back to 20', function() {
      thermostat.change(4);
      thermostat.reset();
      expect(thermostat.temp).toEqual(20);
    });
  });
  describe('read usage', function() {
    it('returns low-usage when temperature below 18', function() {
      thermostat.change(-3);
      expect(thermostat.readUsage()).toEqual('low-usage');
    });
    it('returns medium-usage when temperature less than or equal to 25', function() {
      thermostat.change(5);
      expect(thermostat.readUsage()).toEqual('medium-usage');
    });
    it('returns high-usage when temperature higher than 25', function() {
      thermostat.psOff()
      thermostat.change(6);
      expect(thermostat.readUsage()).toEqual('high-usage');
    });
  });

});

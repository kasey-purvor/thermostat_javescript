
$(document).ready(function() {
    let thermostat = new Thermostat;

    updateTemp()

    $('#temperature-up').click(function() {
        thermostat.up();
        updateTemp()  
    });
    $('#temperature-down').click(function() {
        thermostat.down();
        updateTemp()
    });
    $('#temperature-reset').click(function() {
        thermostat.reset();
    });
    $('#powersaving-off').click(function() {
        thermostat.psOff();
        $('#power-saving-status').text('Off');
    });

    $('#powersaving-on').click(function() {
        thermostat.psOn();
        $('#power-saving-status').text('On');
    });

    function updateTemp() {
        $('#temperature').text(thermostat.temp);
        if(thermostat.readUsage() === "low-usage") {
            $('#temperature').css('color', 'green')
        } else if(thermostat.readUsage() === 'medium-usage') {
            $('#temperature').css('color', 'orange')
        } else if(thermostat.readUsage() === 'high-usage') {
            $('#temperature').css('color', 'red')
        };
    };

});
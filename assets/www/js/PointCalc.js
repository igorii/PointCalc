function getPointsFromImage() {
    var img = capturePhoto();
}

function calculateOriginal () {
    function displayError(type) {
        var result = $('#result');
        result.removeClass('success');
        result.addClass('error');
        result.html(type + ' is not a number.');
    }

    var result   = $('#result');
    var calories = $('#calories').val();
    var fat      = $('#fat').val();
    var fiber    = $('#fiber').val();

    if (!IsNumeric(calories)) {
        displayError('Calories');
        return;
    }
    else if (!IsNumeric(fat)) {
        displayError('Fat');
        return;
    }
    else if (!IsNumeric(fiber)) {
        displayError('Fiber');
        return;
    }

    // If everything checks out, calculate and display the points
    var points = (calories / 50) + (fat / 12) - (fiber / 5);
    result.removeClass('error');
    result.addClass('success');
    result.html('Points: <b>' + points + '</b>.');
}

function IsNumeric(input) {
    return (input - 0) == input && (input+'').replace(/^\s+|\s+$/g, "").length > 0;
}
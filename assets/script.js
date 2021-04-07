var currentDayEl = $('#currentDay');

function currentDayAndTime() {
    var currently = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently);
    
}

setInterval(currentDayAndTime, 1000);
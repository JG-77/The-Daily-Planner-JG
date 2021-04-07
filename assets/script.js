var currentDayEl = $('#currentDay');
var timeContainer = $('#container');

//creating timeblock elelemtns 
var timeDivs = $('<div>');
timeDivs.addClass('input-group');
timeContainer.append(timeDivs);

var timeHours = [
    '9 A.M.',
    '10 A.M.',
    '11 A.M.',
    '12 P.M.',
    '1 P.M.',
    '2 P.M.',
    '3 P.M.',
    '4 P.M.',
    '5 P.M.',
];

for (var i = 0; i < timeHours.length; i++) {
    var timeBlocksEl = $('<span>');
    timeBlocksEl.text(timeHours[i]);
    timeBlocksEl.addClass('input-group-text');
    timeDivs.append(timeBlocksEl);
}


var currentHour = parseInt(moment().format("H"));
console.log(currentHour);


//Displays current date and time on jumbotron
function currentDayAndTime() {
    var currently = moment().format('[Today is] MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently);
    
}

setInterval(currentDayAndTime, 1000);


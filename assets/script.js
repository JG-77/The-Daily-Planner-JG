var currentDayEl = $('#currentDay');
var timeContainer = $('.container');

//creating timeblock elements by appending divs to container
var timeDivs = $('<div>');
timeContainer.append(timeDivs);

//variable object containing array of times
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

//loop to create time blocks and styling of elements using Bootstrap classes
for (var i = 0; i < timeHours.length; i++) {

    var timeBlocksEl = $('<div>');
    var inputEl = $('<input>');
    var buttonEl = $('<button>Save</button>')

    //styling for time blocks
    timeBlocksEl.addClass('input-group-text');
    inputEl.addClass('form-control');
    buttonEl.addClass('btn btn-outline-primary bg-primary text-white');
    inputEl.attr('placeholder', 'Schedule Event');

    timeBlocksEl.text(timeHours[i]);

    timeDivs.append(timeBlocksEl);
    timeBlocksEl.append(inputEl);
    timeBlocksEl.append(buttonEl);
}



var currentHour = parseInt(moment().format("H"));
console.log(currentHour);


//Displays current date and time on jumbotron
function currentDayAndTime() {
    var currently = moment().format('[Today is] MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently);
    
}

setInterval(currentDayAndTime, 1000);


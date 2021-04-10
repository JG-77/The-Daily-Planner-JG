var currentDayEl = $('#currentDay');
var timeContainer = $('.container');
//var buttonEl = $('.btn');
var timeBlocksEl;
//creating timeblock elements by appending divs to container
var timeDivs = $('<div>');
timeContainer.append(timeDivs);

$( document ).ready(function() {
});

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
async function generateTimeBlocks() { 
    for (var i = 0; i < timeHours.length; i++) {

       var timeBlocksEl = $('<div>');
        var inputEl = $('<input>');
        var buttonEl = $('<button>Save</button>')

        //styling for time blocks
        timeBlocksEl.addClass('input-group-text  time-block');
        inputEl.addClass('form-control input-value');
        buttonEl.addClass('btn btn-outline-success bg-success text-white');
        inputEl.attr('placeholder', 'Schedule Event');
        //adds id to each time block based on the hour
        timeBlocksEl.attr('id', i + 9);

        timeBlocksEl.text(timeHours[i]);

        timeDivs.append(timeBlocksEl);
        timeBlocksEl.append(inputEl);
        timeBlocksEl.append(buttonEl);
    }
}

//Gets current hour in military time
var currentHour = parseInt(moment().format("H"));
console.log(currentHour);

//compare the id of each time-block class to current hour and add styling classes based on time
function doColorCode() { //wrapped in a function
    $(".time-block").each(function(){
        var blockID = $(this).attr("id");
        
        if (parseInt(blockID) < currentHour) {
            $(this).addClass('past');
        } else if (parseInt(blockID) === currentHour) {
            $(this).addClass('present');
        } else {
            $(this).addClass('future');
        }
    })
}

async function run(){
    await generateTimeBlocks(); //this will wait for this function to finish before moving forward
    doColorCode(); //once the time blocks are generated handle the styling
    getSavedInput();
};

run();//runs function at page load

//stores input in local storage
function saveInput() {
    $('.time-block').each(function(){
        var inputVal = $(this).children('input').val(); //have to grab this based on what $(time-block) console logs here
        var timeBlockId = $(this).attr('id');//have to grab that id similarly
        //console.log($(this))
        //console.log($('.time-block'));
        //console.log(inputVal);
        localStorage.setItem(timeBlockId, inputVal);
    })
}

//click event for saving --> how to I identify all the 'save' buttons???
$('.btn').on('click', function() {
    saveInput();
    getSavedInput();
})

//gets events from local storage
function getSavedInput() {
    var inputVal = $('.time-block').children('input').val();
    inputVal.text(localStorage.getItem(timeBlockId, inputVal));
    
}

//Displays current date and time on jumbotron
function currentDayAndTime() {
    var currently = moment().format('[Today is] MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently);
    
}

setInterval(currentDayAndTime, 1000);


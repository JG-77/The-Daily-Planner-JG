$( document ).ready(function() {
var currentDayEl = $('#currentDay');
var timeContainer = $('.container');

//creating timeblock elements by appending divs to container
var timeDivs = $('<div>');
timeContainer.append(timeDivs);

//added footer
var footerEl = $('<footer>');
footerEl.addClass('bg-info text-white mt-4');
var h2El = $('<h2>Have a great day!</h2>');
h2El.addClass('text-center p-2')
footerEl.append(h2El); 
timeContainer.append(footerEl);

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
        timeBlocksEl.addClass('input-group-text time-block');
        inputEl.addClass('form-control input-value');
        buttonEl.addClass('btn btn-outline-info bg-info text-white m-1');
        //added element attributes
        inputEl.attr('placeholder', 'Schedule Event');
        inputEl.attr('type', 'text');
        inputEl.attr('aria-label', 'Schedule Event');
        buttonEl.attr('type', 'button');

        timeBlocksEl.attr('id', i + 9); //adds id to each time block based on the hour
        timeBlocksEl.text(timeHours[i]);//inserts a different time from object to each time block 
        inputEl.val(localStorage.getItem(i + 9)); //input values remain in the input with page refresh

        timeDivs.append(timeBlocksEl);
        timeBlocksEl.append(inputEl);
        timeBlocksEl.append(buttonEl);
    }
}

//Gets current hour in military time
var currentHour = parseInt(moment().format("H"));
console.log(currentHour);

//compare the id of each time-block class to current hour and add styling classes based on time
function doColorCode() { 
    $(".time-block").each(function(){
        var blockID = $(this).attr("id");
        
        if (parseInt(blockID) < currentHour) {
            $(this).addClass('past border-info text-black');
        } else if (parseInt(blockID) === currentHour) {
            $(this).addClass('present border-info');
        } else {
            $(this).addClass('future border-info');
        }
    })
}

async function run(){
    await generateTimeBlocks(); //this will wait for this function to finish before moving forward
    doColorCode(); //once the time blocks are generated handle the styling
};

run();//runs function at page load

//stores input in local storage
function saveInput() {
    $('.time-block').each(function(){
        var inputVal = $(this).children('input').val(); 
        var timeBlockId = $(this).attr('id');
        localStorage.setItem(timeBlockId, inputVal);
    })
}

//click event for saving 
$('.btn').on('click', function() {
    saveInput();
})

//Displays current date and time on jumbotron
function currentDayAndTime() {
    var currently = moment().format('[Today is] MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently); 
}

setInterval(currentDayAndTime, 1000);

});
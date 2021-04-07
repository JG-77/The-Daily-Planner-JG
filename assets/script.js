var currentDayEl = $('#currentDay');
console.log('currently')
console.log(currentDayEl) 

function currentDayAndTime() {
    var currently = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDayEl.text(currently);
    console.log(currently)
}
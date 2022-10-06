var timeDisplay = $('#currentDay');
var timeEl = ('.hour');
var saveBtn = $('.saveBtn');
var centerRowEl = $('.textarea');
var eventInput = $('.fname');
var btnIcon = $('.fa-save')

// Clock display on jumbotron
function displayTime(){
    var now = moment().format('ddd, MMMM Do hh:mm:ss')
    timeDisplay.text(now)
}
// The second counter, in milliseconds
setInterval(displayTime, 1000);

// If statement for checking current time and setting classes based on if it is before/afer/current
var objDate = moment().format();
    if(objDate === timeDisplay) {
        $(centerRowEl).addClass('present');
    } else if(objDate < timeDisplay) {
        $(centerRowEl).addClass('past');
    } else {
        $(centerRowEl).addClass('future');
    }

let eventStorage = localStorage.getItem('centerRowEl')
    ? JSON.parse(localStorage.getItem('centerRowEl'))
    : [];


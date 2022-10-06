var timeDisplay = $('#currentDay');
var timeEl = ('.hour');
var saveBtn = $('.saveBtn')
var centerRowEl = $('.textarea')

// Clock display on jumbotron
function displayTime(){
    var now = moment().format('ddd, MMMM Do hh:mm:ss')
    timeDisplay.text(now)
}

//Function that handles where the current time is at on the table
function setTimeStyles() {
    var currentTime = new Date().getHours();
    if(timeEl < now) {

        //Not sure if these are correct    
        centerRowEl.addclass('past');
    }
    else if (timeEl > now) {
        centerRowEl.addclass('future');
    } else {
        centerRowEl.addClass('present');
    }
}

// The second counter, in milliseconds
setInterval(displayTime, 1000);

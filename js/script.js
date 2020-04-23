// add current day at top of calendar (assist from https://www.webfx.com/blog/web-design/javascript-dates-moment-js/)
(function() {
  var now = moment().format('dddd, MMMM Do');
  var displayMoment = document.getElementById('currentDay');
  displayMoment.innerHTML = now;

  console.log(now);
})();

var row = $("<div>").addClass("input-group");
var timeBlock = $("<textarea>").addClass("time-block");
var hour = $("<span>").addClass("hour");
var saveBtn = $("<button>").addClass("saveBtn");

// color-code time blocks based on past, present, future
var auditHour = function(timeBlock) {
  // moment object 
  var currentTime = moment().format("LT");
  // print out object 
  console.log(currentTime);

  // apply new class if task is near/over due date
  if (moment().isAfter(hour)) {
    $(timeBlock).addClass("future");
  } 
  else if (moment().isBefore(hour)) {
    $(timeBlock).addClass("past");
  }

};

// check current time
auditHour(hour);

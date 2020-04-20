// add current day at top of calendar (assist from https://www.webfx.com/blog/web-design/javascript-dates-moment-js/)
(function() {
  var now = moment();
  var displayMoment = document.getElementById('currentDay');
  displayMoment.innerHTML = now;

  console.log(now);
})();

// add time blocks


// color-code time blocks for past, present, future


// enter event, text saved in local storage, and saved events persist
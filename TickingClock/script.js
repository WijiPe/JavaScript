var second = 0;
var secNeedle = document.querySelector("#seconds");
var minute = 0;
var minNeedle = document.querySelector("#minutes");
var hour = 0;
var hrNeedle = document.querySelector("#hour");

function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
  setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    second = time % 60;
    second = (second+30)/60*360;
    secNeedle.style.transform = "rotate(" + second + "deg)";
    minute = (time/60) % 60;
    minute = (minute+30)/60*360;
    minNeedle.style.transform = "rotate(" + minute + "deg)";
    hour = (time/3600) % 12;
    hour = (hour+6)/12*360;
    hrNeedle.style.transform = "rotate(" + hour + "deg)";
  }, 1000);
  
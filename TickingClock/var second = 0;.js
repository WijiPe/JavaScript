var second = 0;
var secNeedle = document.querySelector("#seconds");

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
  }, 1000);
  
var Hide = document.querySelector("#Alert")

function setActive() {
    Hide.remove();
}

function displayAlert(MessageAlert) {
    alert(MessageAlert);
}


var Red = document.querySelectorAll("#temperature1");
var Blue = document.querySelectorAll("#temperature2");
var unit = "°C";

function switchTemp(element){
    unit === element.value;
    for( var i = 0; i<Red.length; i++){     
        if (element.value === "°F"){
            Red[i].innerText = Math.round((Red[i].innerText * 9/5) + 32);
            Blue[i].innerText = Math.round((Blue[i].innerText * 9/5) + 32);
        }
        else if (element.value === "°C"){
            Red[i].innerText = Math.round((Red[i].innerText - 32) *5/9);
            Blue[i].innerText = Math.round((Blue[i].innerText - 32) *5/9);
        }
    }
}          

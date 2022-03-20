var displayDiv = document.querySelector("#display");
var begin = true;
var dotted = false;
var count = false;
var storage = 0;
var firstOP = true;
var previousOP = "";

function press(number){
    if(count != false){
        displayDiv.innerText = "0";
        begin = true;
        dotted = false;
        count = false;
    }
    if(number === "." && dotted === true){
        return;
    }
    if(begin === true){
        displayDiv.innerText = number;
        begin = "pressed";
        if(number === "."){
            displayDiv.innerText = "0.";
            dotted = true;
        }
    } 
    else 
    {
        if(number === "."){
            dotted = true;
        }
        displayDiv.innerText = displayDiv.innerText + number;
    }
}

function clr(){
    displayDiv.innerText = "0";
    begin = true;
    dotted = false;
    count = false;
    storage = 0;
    firstOP = true;
    previousOP = "";
}

function setOP(OP){
    if(count === false){
        count = OP;
        if(previousOP === "+" && firstOP != true){
            displayDiv.innerText = storage + Number(displayDiv.innerText);
        }
        if(previousOP === "-" && firstOP != true){
            displayDiv.innerText = storage - Number(displayDiv.innerText);
        }
        if(previousOP === "*" && firstOP != true){
            displayDiv.innerText = storage * Number(displayDiv.innerText);
        }
        if(previousOP === "/" && firstOP != true){
            displayDiv.innerText = storage / Number(displayDiv.innerText);
        }
        firstOP = false;
        previousOP = OP;
        storage = Number(displayDiv.innerText);
    }
}
function calculate(){
    setOP("=") 
}


const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value.length < 10) {
        display.value += input;
    }
    if(display.value.includes("Error")){
        display.value="Error";
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(eval(display.value.length) < 10) {
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
        }
    }
    else {
        display.value="Error"
    }
    if(display.value.includes("Error")){
        display.value="Error";
    }
}

function backSpace(){
    display.value.length = display.value.length - 1;
    if(display.value("Error")){
        display.value="Error";
    }
}

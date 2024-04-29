const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value.length < 10) {
        display.value += input;
    }
    else {
        display.value = "Error"
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
}
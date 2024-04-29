const display = document.getElementById("display");

function appendToDisplay(input){
    if(display.value.length < 10) {
        display.value += input;
    }
    if(display.value.includes("Error")){
        clearDisplay();
        appendToDisplay(input);
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate() {
    if (display.value.length < 10) {
        try {
            if (display.value.includes("^")) {
                const values = display.value.split("^");
                if (values.length === 2) {
                    const base = parseFloat(values[0]);
                    const exponent = parseFloat(values[1]);
                    display.value = power(base, exponent);
                } 
                else {
                    display.value = "Error";
                }
            } else {
                display.value = eval(display.value);
            }
        } catch (error) {
            display.value = "Error";
        }
    } else {
        display.value = "Error";
    }
}


function backSpace(){
    display.value.length = display.value.length - 1;
    if(display.value("Error")){
        display.value="Error";
    }
}

function power(x,n){
    let y = 1;
    for (let i=1; i<=n; i++) {
        y = y*x;
    }
    return y;
}

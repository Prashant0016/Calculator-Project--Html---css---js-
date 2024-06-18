const show = document.getElementById("display-screen");
const MAX_DISPLAY_LENGTH = 18;

function updateDisplay(val){
    if (val === 'Del') {
        show.textContent = show.textContent.slice(0, -1);
    } else {
        if (show.textContent.length < MAX_DISPLAY_LENGTH) {
            show.textContent += val;
        }
    }
}

function clearDisplay(){
    show.textContent = ''; 
}

function handleEquals(){
    try {
        show.textContent = eval(show.textContent); 
    } catch(error) {
        show.textContent = "Error";
    }
}

let red = document.getElementById("stopLight")
let redbtn = document.getElementById("stopButton")
let yellowbtn = document.getElementById("readyButton")
let yellow = document.getElementById("readyLight")
let green = document.getElementById("goLight")
let greenbtn = document.getElementById("goButton")

function onStop() {
    red.style.backgroundColor = "#cf1124";
    redbtn.style.backgroundColor = "#cf1124";
    green.style.backgroundColor = "#4b5069";
    greenbtn.style.backgroundColor = "#4b5069";
    yellow.style.backgroundColor = "#4b5069";
    yellowbtn.style.backgroundColor = "#4b5069";
}

function onReady() {
    yellow.style.backgroundColor = "#f7c948";
    yellowbtn.style.backgroundColor = "#f7c948";
    red.style.backgroundColor = "#4b5069";
    redbtn.style.backgroundColor = "#4b5069";
    green.style.backgroundColor = "#4b5069";
    greenbtn.style.backgroundColor = "#4b5069";
}

function onGo() {
    green.style.backgroundColor = "#199473";
    greenbtn.style.backgroundColor = "#199473";
    red.style.backgroundColor = "#4b5069";
    redbtn.style.backgroundColor = "#4b5069";
    yellow.style.backgroundColor = "#4b5069";
    yellowbtn.style.backgroundColor = "#4b5069";
}

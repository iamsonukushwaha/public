'use strict';


let today = new Date();
document.getElementById('date').innerHTML = today.toDateString();


function Timer() {
    var d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString() ;
}

setInterval(Timer, 1000);

// console.log('Here\'s a hidden message');


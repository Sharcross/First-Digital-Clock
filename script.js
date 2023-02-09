function clock(){
    let today = new Date();

    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes).innerHTML = minutes;
    document.querySelector(".seconds).innerHTML = seconds;
    document.querySelector(".period).innerHTML = period;
}

let updateClock = setInterval(clock,1000);
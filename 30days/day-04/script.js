let [seconsd, minute, hour] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null

function startTimer() {
    seconsd++
    if (seconsd >= 60) {
        seconsd = 0;
        minute++;}
    if (minute >= 60) {
        minute = 0;
        hour++;
    }

    displayTime.innerHTML = `${(hour < 10 ? "0" : "") + hour} : ${(minute < 10 ? "0" : "") + minute} : ${(seconsd < 10 ? "0" : "") + seconsd}`;
}

function setTimer(){
    setInterval(startTimer(), 1000);
}

function watchStart (){
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(startTimer, 1000);

}

function watchStop() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
}

function watchReset() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null;
    }
    seconsd = 0;
    minute = 0;
    hour = 0;
    displayTime.innerHTML = "00 : 00 : 00";
}
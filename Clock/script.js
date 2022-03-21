
function setTime() {
    let time = new Date();

    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    // hour, minute, second are ids of HTML element 

    let secDeg = (sec / 60) * 360;
    second.style.transform = `rotate(${secDeg}deg)`;

    let minDeg = (min / 60) * 360;
    minute.style.transform = `rotate(${minDeg}deg)`;

    let hrsDeg = (hrs / 12) * 360;
    hour.style.transform = `rotate(${hrsDeg}deg)`;
}



setTime();
setInterval(() => {
    setTime();
}, 1000);
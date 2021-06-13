const clock = document.querySelector('#clock');

const getClock = () => {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    hour = hour <10 ? `0${hour}` : hour;
    minute = minute <10 ? `0${minute}` : minute;
    seconds = seconds <10 ? `0${seconds}` : seconds;
    const FormattedTime = `${hour}:${minute}:${seconds}`;
    clock.innerText = FormattedTime;
}
getClock();
setInterval(getClock,1000);


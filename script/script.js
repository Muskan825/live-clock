const time = document.querySelector("#time");
const greeting = document.querySelector("#greeting");
let name = document.querySelector("#name");
const date = document.querySelector("#date");
showTime();
greet();
getName();
name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);
function setName(e){
    if(e.type == "keypress"){
        if(e.keycode==13){
        localStorage.setItem("info",e.target.innerHTML);
        name.blur();
        }
    }
    else{
        localStorage.setItem("info",e.target.innerHTML);
    }
}
function getName(){
    if(localStorage.getItem("info")==null){
        name.innerHTML = " [Enter Text] ";
    }
    else{
        name.innerHTML = localStorage.getItem("info");
    }
}
function showTime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let data = today.toDateString();
    const mood = hour>=12?"PM":"AM";
    hour = hour%12 || 12;
    hour = hour<10?(`0${hour}`):hour;
    min = min<10?(`0${min}`):min;
    sec = sec<10?"0"+sec:sec;
    date.innerHTML = `${data}`;
    time.innerHTML = `${hour}
    <span>:</span>
      ${min}
      <span>:</span>
      ${sec}
      <span></span>
      ${mood}`;
    setTimeout(showTime,1000);
}
function greet(){
    let today = new Date();
    let hour = today.getHours();
    if (hour < 12) {
        document.body.style.backgroundImage ='url("./images/morning.avif")';
        greeting.innerHTML = "Good Morning";
        document.body.style.color='#1d0200';
    }else if (hour < 16) {
        document.body.style.backgroundImage ='url("./images/afternoon.avif")';
        greeting.innerHTML = "Good Afternoon";
        document.body.style.color='#020035';
    } 
    else if (hour < 18) {
        document.body.style.backgroundImage ='url("./images/evening.avif")';
        greeting.innerHTML = "Good Evening";
        document.body.style.color='#c4fff7';
    } else {
        document.body.style.backgroundImage ='url("./images/night.avif")';
        greeting.innerHTML = "Good Evening";
        document.body.style.color = "white";
    }
}
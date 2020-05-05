function clock(){
clock.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

var hour = document.querySelector("#Time .hr");
var minute = document.querySelector("#Time .min");
var second = document.querySelector("#Time .sc");

var h = new Date().getHours()% 12 || 12; ;
var m = new Date().getMinutes();
var s = new Date().getSeconds();


hour.innerHTML = h;
minute.innerHTML = m;
second.innerHTML = s;


}

var interval = setInterval(clock , 1000);

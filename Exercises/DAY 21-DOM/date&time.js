function time(){
let d=new Date();
let date = d.getDate()
let month =  d.getMonth()
let year = d.getFullYear()
let hour = d.getHours()
let minute = d.getMinutes()
let second = d.getSeconds()
let session;
if(date < 10){
    date = '0' + date
}

if (month < 10) {
    month = '0' + month
}

if (minute < 10) {
    minute = '0' + minute
}

if (second < 10) {
    second = '0' + second
}

if(hour > 12){
    hour = hour - 12
}

if (hour < 10) {
    hour = '0' + hour
}



document.querySelector('#hours').innerHTML = hour;
document.querySelector('#minute').innerHTML =  minute;
document.querySelector('#second').innerHTML = second;

}
setInterval(time,1000)

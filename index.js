const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const day=["Sunday",'Monday',"Tuesday","Wednesday","Thursday","Friday","Saturday"]

const d = new Date();

let naam = month[d.getMonth()];

let newday=day[d.getDay()];

const newmonth=document.querySelector('.andar-chota')
newmonth.innerHTML=naam;

const currentday=document.querySelector("#h4");
currentday.innerHTML=newday;

const year=d.getFullYear();
const newyear=document.querySelector("#last");
newyear.innerHTML=year;

let din=d.getDate();
const newdin=document.querySelector('#two');
newdin.innerHTML=din


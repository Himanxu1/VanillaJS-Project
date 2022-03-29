const month =[
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays=[
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"


]

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');


let futureDate = new Date(2022,2,31,11,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

let months = futureDate.getMonth();
let days = futureDate.getDate();let weekday = futureDate.getDay();
weekday = weekdays[weekday];


months = month[months];


giveaway.textContent = `Giveaway end on ${weekday} ,${days} ${months} ${year} ${hours}:${minutes}am`;


const futureTime = futureDate.getTime();


function getRemainingTime(){

    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinutes = 60*1000;

    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay)/oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinutes);
    let second = Math.floor((t % oneMinutes) / 1000);


    // console.log(items);
    const values = [days,hours,minutes,second]


     function format(item){
        if(item < 10){
            return  item = `0${item}`;

        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    })

    if(t < 0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired">Sorry,this giveaway has expired </h4>`
    }

}

let countdown = setInterval(getRemainingTime,1000);

getRemainingTime();

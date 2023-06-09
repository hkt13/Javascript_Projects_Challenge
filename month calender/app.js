const monthel= document.getElementById("monthel")
const fulldate= document.getElementById("fulldate")
const dateel= document.querySelector(".days")

const monthindex= new Date().getMonth();

const months=[
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
    "December",
];

monthel.innerText= months[monthindex];
fulldate.innerText= new Date().toDateString();

//getting the last date
//month index is 1 so feb and 0 is previous month's last date

const lastdate= new Date(new Date().getFullYear(), monthindex +1 ,0).getDate();

//getting the day's index on which the first day would fall... in js weeks starts from sunday not monday bt in our application we started from monday so js will show index according to its viewpoint.. so in order to adjust we subtract the first day's index by 1

const firstdate= new Date(new Date().getFullYear(), monthindex ,1).getDay()-1;

console.log(firstdate)
let days= "";

// starting from top and comes back to beggining
 for (let index = firstdate; index > 0; index--)
 {
    days+= `<div class="empty"></div>`   
}

for (let index = 1; index <= lastdate; index++) {
    
    if(index===new Date().getDate()){
        days+= `<div class="today">${index}</div>`;    
    }
    else{
    days+= `<div>${index}</div>`;
    }
}

dateel.innerHTML= days;
console.log(new Date().getDate())
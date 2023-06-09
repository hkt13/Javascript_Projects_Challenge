const enddate= "25 March 2023 09:02:49 PM";
document.getElementById("enddate").innerText= enddate;
let index= document.getElementsByTagName("input")
// console.log(index)

function countdown(){

    const end= new Date(enddate)
    const now= new Date();
    const diff= (end-now)/1000;
    if(diff<0)
    return;
    // console.log(diff/3600/24)
    // console.log(diff/3600%24)
    // console.log(diff/60%60)
    index[0].value= Math.floor(diff/3600/24)
    index[1].value= Math.floor(diff/3600%24)
    index[2].value= Math.floor(diff/60%60)
    index[3].value= Math.floor(diff%60)
}

countdown()

setInterval(() => {
    countdown();
}, 1000);
function getcolor(){
const random= Math.floor(Math.random()*16777215)
const randomnum= "#"+ random.toString(16);
document.body.style.backgroundColor= randomnum;
document.getElementById("h2").innerText=randomnum;
//tagname se select nhi hua yha why?
navigator.clipboard.writeText(randomnum)
}

const btn= document.getElementById("btn")
//class name se select mhi hua yha why?
btn.addEventListener("click",getcolor)
getcolor();
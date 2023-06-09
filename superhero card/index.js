const h2el= document.getElementById("h2");
const h4el= document.getElementById("h4");
const targetel= document.getElementById("target");
const intelligence= document.getElementById("intelligence");
const durability= document.getElementById("durability");
const strength= document.getElementById("strength");
const power= document.getElementById("power");
const speed= document.getElementById("speed");
const combat= document.getElementById("combat");
const mname= document.getElementById("mname");
const main= document.getElementById("main")
function url(){
const randomid= Math.floor(Math.random()*731) +1;
const link= `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${randomid}.json`

getdata(link);
}

async function getdata(link)
{
h4el.innerText= "Content Loading"
const response = await fetch(link);
// if(!response.ok){
// main.innerText= " An Error Happened"
// }
const data= await response.json();
console.log(data);
h2el.innerText= data.name;
h4el.innerText= data.biography.fullName;
targetel.src= data.images.sm;
strength.innerText= data.powerstats.strength
speed.innerText= data.powerstats.speed
durability.innerText= data.powerstats.durability
power.innerText= data.powerstats.power
combat.innerText= data.powerstats.combat
intelligence.innerText= data.powerstats.intelligence
mname.innerText= data.biography.publisher;
}

url();
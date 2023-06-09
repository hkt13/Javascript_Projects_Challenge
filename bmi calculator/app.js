const btnel= document.getElementById("btn")
const bmiel = document.getElementById("bmi-info")
btnel.addEventListener("click", getBMI)
const showel= document.getElementById("show-info")

function getBMI(){

const heightvalue= document.getElementById("height").value/100
const weightvalue= document.getElementById("weight").value
const bmivalue= weightvalue/(heightvalue*heightvalue);
bmiel.value = bmivalue;

if(bmivalue<18){
    showel.innerText= "Under Weight";
}
else if(bmivalue>=18 && bmivalue<25)
{
    showel.innerText="Normal Weight";
}
else if(bmivalue>=25 && bmivalue<30)
{
    showel.innerText="Over Weight";
}
else if(bmivalue>=30){
    showel.innerText="Obesity";
}

}
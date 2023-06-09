
const container= document.getElementById("container")
const entered_bill_value = document.getElementById("bill-value")
const person_slider = document.getElementById("person-slider")
const no_of_person = document.getElementById("no_of_person")
const total_per_person = document.getElementById("total-per-person")
const bill_per_person = document.getElementById("bill-total");
const percent_slider = document.getElementById("percent-slider")
const tip_percent= document.getElementById("tip-percent")
const tip_value= document.getElementById("tip-value")
const tip_per_person= document.getElementById("tip-total")

const putdata=()=>{ 
no_of_person.innerHTML = `${person_slider.value} People`
bill_per_person.innerHTML = `₹${((entered_bill_value.value) / (person_slider.value)).toFixed(2)}`
tip_percent.innerHTML=`${(percent_slider.value)}%`
tip_value.innerHTML= `₹${((entered_bill_value.value*percent_slider.value)/100).toFixed(2)}`;
total_per_person.innerHTML = `₹${(((entered_bill_value.value) / (person_slider.value))+ (((entered_bill_value.value*percent_slider.value)/100) / (person_slider.value))).toFixed(2)}`
tip_per_person.innerHTML=  `₹${(((entered_bill_value.value*percent_slider.value)/100)/(person_slider.value)).toFixed(2)}`

}
container.addEventListener("input", putdata)

// percent_slider.addEventListener("input",function(event){
// console.log(event.target.value)
// tip_percent.innerHTML=`${percent_slider.value}%`
// tip_value.innerText= ((entered_bill_value.value*percent_slider.value)/100).toFixed(2);
// })


// person_slider.addEventListener("input", function (event) {
//     no_of_person.innerHTML = `${person_slidero_of_personlue} People`
//     total_per_person.innerText = `₹${((entered_btotal-per-personalue) / (person_slider.value)).toFixed(2)}`
//     bill_per_person.innerText = `₹${((entered_bill_value.value) / (person_slider.value)).toFixed(2)}`
// })

// /*key up will not take the scrolled value */
// entered_bill_value.addEventListener("input", function (event) {
//     no_of_person.innerHTML = `${person_slidero_of_personlue} People`
//     total_per_person.innerText = `₹${((entered_btotal-per-personalue) / (person_slider.value)).toFixed(2)}`
//     bill_per_person.innerText = `₹${((entered_bill_value.value) / (person_slider.value)).toFixed(2)}`
// })



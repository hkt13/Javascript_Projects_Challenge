const ratingels= document.querySelectorAll(".rating")
let selected="";
const containerel= document.getElementById("container")
ratingels.forEach((ratingel)=>{

    ratingel.addEventListener("click", function(event){
     selected=event.target.innerText||event.target.parentNode.innerText;
      removeclass();
     ratingel.classList.add("active");
    //  event.target.parentNode.classList.add("active"); // agr event.target se jauge toh yeh ar likhna hai becuif you click on image the event will generate event of only image unlike div 
    })
})

function removeclass(){

ratingels.forEach((ratingel)=>{

    ratingel.classList.remove("active");
})

}

document.getElementById("btn").addEventListener("click",function(){
if(selected!="")
{
containerel.innerHTML=`<strong>Thank You !</strong> 
<br>
<br>
<strong>Your Feedback : ${selected}</strong>
<br>
<p>We'll use your feedback to improve our customer support.</p>`

}

})


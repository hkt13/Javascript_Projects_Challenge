const slideel= document.getElementsByClassName("slide");
const dotel= document.getElementsByClassName("dot")


let current_slide=0;


const changeimage=(value)=>{
    if(value>=slideel.length){
        value=0;
    }
    slideel[current_slide].classList.toggle("active")
    dotel[current_slide].classList.toggle("activeDot")
    

    slideel[value].classList.toggle("active")
    dotel[value].classList.toggle("activeDot")
    current_slide=value;
    }

window.onload=setInterval(() => {
    changeimage(current_slide+1)
}, 4000);



const bodyel= document.querySelector("body");

bodyel.addEventListener("mousemove",function (event) {
    const spanel= document.createElement("span")
     const ypos=   event.offsetY 
     const xpos=  event.offsetX
     spanel.style.left= xpos +"px";
     spanel.style.top= ypos +"px";
     bodyel.appendChild(spanel);
     const size= Math.random() *100;
     spanel.style.width= size+"px";
     spanel.style.height=size+"px";
     bodyel.appendChild(spanel);
     setTimeout(() => {
        spanel.remove();
     }, 3000);
})
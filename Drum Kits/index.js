const kits= ["snare", "kick", "crash", "tom"];
const containerel= document.querySelector(".container")

kits.forEach(kit=>{
const btnel= document.createElement("button")
btnel.classList.add("btn")
btnel.innerText = kit;
btnel.style.backgroundImage= "url(images/" + kit + ".png)";
containerel.appendChild(btnel);
const audioel= document.createElement("audio")
audioel.src= "audio/" + kit + ".mp3"
containerel.appendChild(audioel)

btnel.addEventListener("click", function() {
    console.log("clicked")
    audioel.play();
})

window.addEventListener("keyup",function name(event) {
    console.log(event.key)
    if(event.key=== kit.slice(0,1)){
        audioel.play();
        btnel.style.transform= "scale(.9)"
        this.setTimeout(()=>{
            btnel.style.transform= "scale(1)";
        },100)
    }
});
});
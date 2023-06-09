const item= document.getElementById("item")
const text_box= document.getElementById("text-box")

item.addEventListener("keyup", function(event) {
    if(event.key=="Enter"){
        console.log(this.value)
    addnote(this.value)
    this.value=""
    }
})

const addnote=(param)=>{
const notes= document.createElement("li")
notes.innerHTML=` 
${param}
<i class="delete fas fa-times">
</i>
`

notes.addEventListener("click",function () {
    this.classList.toggle("done");
})
notes.querySelector("i").addEventListener("click",function () {
    notes.remove();
})
    text_box.appendChild(notes);

}
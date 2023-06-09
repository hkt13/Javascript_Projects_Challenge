const addel= document.getElementById("btn")
const containerel= document.getElementById("container")

const savenotes=()=>{

const notes= document.querySelectorAll("textarea")
const data=[];
notes.forEach(note => {
data.push(note.value);
})
if(data.length===0){
    localStorage.removeItem("notes") 
   //if you want ki user last remaining note ko bhi delete na kr paaye ekl note rhe hi rhe screen par so by doing this:
     addnote();//ar agr yeh kr diya toh upr wale ki need nhi hogi 
}
else{
localStorage.setItem("notes", JSON.stringify(data))
}
}



const addnote=(text="")=> {
    
    const note= document.createElement("textarea")
    note.classList.add("notes")
    note.placeholder= "Empty Note";
    note.value= `${text}`;
    note.addEventListener("dblclick", function(){
        note.remove();
        savenotes();
    })
    note.addEventListener("focusout",function () {
        savenotes();
    })
    
    containerel.insertBefore(note, containerel.lastElementChild);
    console.log(text)
    savenotes();
}
(
function () {
    const lsnotes = JSON.parse(localStorage.getItem("notes"))
    if(lsnotes===null){
        addnote();
    }
    else{
        lsnotes.forEach(lsnote=>
            {
                addnote(lsnote)
            })
    }
}

)()

addel.addEventListener("click", function(){
    addnote();
})




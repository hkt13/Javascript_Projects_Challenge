const addbtnel= document.querySelector("#addbtn")
const mainel= document.querySelector("#main")

addbtnel.addEventListener("click",function() {
    addnote();
})

function savenotes() {
    const notes= document.querySelectorAll(".note textarea")
    const data=[];
    notes.forEach((element) => {
        data.push(element.value)
    });
    if(data.length===0){//agr data kch hai hi nhi(yaani empty array bch jaega) difference between this and having empty string in textarea in localstorage, empty string"" yaani text empty hai // textarea agr rhega toh uske andr ki value empty string aa skti hai lekin agr textarea hi nhi rhega toh uski toh koi empty string value bhi exist nhi kregi
        localStorage.removeItem("notes")
        addnote();
    }
    else{
        localStorage.setItem("notes", JSON.stringify(data))
    }
}

function addnote(text="") {
const note= document.createElement("div")    
note.classList.add("note")
note.innerHTML=
`        
<div id="tool">
<i class="trash fa-solid fa-trash"></i>
<i class="save fa-regular fa-floppy-disk"></i>
</div>
<textarea >${text}</textarea>`    
note.querySelector(".trash").addEventListener("click",function () {
    note.remove();
    savenotes();
})

note.querySelector(".save").addEventListener("click",function () {
    savenotes();
})

//for auto save;
note.querySelector("textarea").addEventListener("focusout",function () {
    savenotes();
})

mainel.appendChild(note)
savenotes();

}

(
function () {
    const lsnotes= JSON.parse(localStorage.getItem("notes"));
    
    if (lsnotes==null) {//agr kch bhi nhi hoga toh obviously null aaega
        addnote();//only to show when website is opening..
    } else {
        lsnotes.forEach((lsnote) => {
            addnote(lsnote)
        });        
    }

}


)();
const inputel= document.getElementById("input")
inputel.addEventListener("keyup",function (event) {
    if(event.target.value&&event.key=="Enter"){
       showdata(event.target.value) 
    }
})
const meaningel=document.getElementById("meaningcontainer")
const typingel=document.getElementById("typing")
const titleel= document.getElementById("title")
const meanel= document.getElementById("meaning")
const audioel=document.getElementById("audio")
async function showdata(word) {

    try {
        meaningel.style.display="none";
        typingel.style.display="block";
        typingel.innerText=`seraching the word: ${word}`
        const url=`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
        const response= await fetch(url).then((result)=> result.json())
        console.log(response)
        if(response.title){
            typingel.style.display="none";
            meaningel.style.display="block";
            titleel.innerText= word;
            meanel.innerText= `NA`   
            audioel.style.display="none";   
        }
        else{
         typingel.style.display="none";
         meaningel.style.display="block";
         titleel.innerText= response[0].word; 
         meanel.innerText= response[0].meanings[0].definitions[0].definition
         audioel.src= response[0].phonetics[0].audio
        }
    } catch (error) {
        console.log(error)
        typingel.innerText=`An Error Happened Please Try Again`
        }

    
}
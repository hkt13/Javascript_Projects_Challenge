const ans=[
{
'que':'what is your name',
'a':'harsh',
'b':'satish',
'c':'harish',
'd':'manish',
'correct': 'a'
},
{
    'que':'what is your class',
    'a':'11',
    'b':'nothing',
    'c':'12',
    'd':'1',
    'correct': 'b'
    },
    {
        'que':'what is india capital',
        'a':'delhi',
        'b':'mumbai',
        'c':'haryana',
        'd':'U.P',
        'correct': 'a'
        }
]
let index=0;
let right=0;
let wrong=0;
let total=ans.length;

let h2= document.getElementById("h2");
const options= document.querySelectorAll(".options") 

const load=()=>{
    if(index===total){
      return  endquiz();
    }
    reset();
h2.innerText=`${index+1})  ${ans[index].que}`;
options[0].nextElementSibling.innerText=ans[index].a;//innertext hi le lenge idhr toh agr kl ko koi html entity bhi daalta toh bhi woh as a text hi jaegi
options[1].nextElementSibling.innerText=ans[index].b;
options[2].nextElementSibling.innerText=ans[index].c;
options[3].nextElementSibling.innerText=ans[index].d;

}


function next(){
    let data= ans[index];
 const an = getans();
 console.log(an)
//  console.log(an,data.correct)
 if (an==data.correct) {
    right++;
 } 
 else{
    wrong++;
 }
 index++;
 load();
}
const getans=()=>{
let answer;
options.forEach(
    (input) => {
if(input.checked)    
{
    answer= input.value;//yha return likhne se foreach wale function ko return hu jaega jb bhi hme getans ko return krwana hai
}
}
)
return answer;
}
const reset=()=>{
    options.forEach(
        (input) => {
       input.checked= false;    
    }
    )


}
const endquiz=()=>{
let main= document.getElementById("main")
main.innerHTML=
// here div tag for customization
`
<div style= "text-align:center">
<h2>Than You For Playing this quiz.</h2>
<h3>${right} out of ${total} are correct.</h3>
</div>`
}
load();
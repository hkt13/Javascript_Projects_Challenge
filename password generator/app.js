let lowercase="abcdefghijklmnopqrstuvwxyz"
let uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let numbers="1234567890";
let special="!@#$%^&*+";

let upper=document.getElementById("uppercase");
let lower=document.getElementById("lowercase")
let num= document.getElementById("numbers")
let symb= document.getElementById("symbols")
let head= document.getElementById("head")
let total= document.getElementById("total-char")
const generate=(data)=>{
return data[Math.floor(Math.random() * data.length)];
}

const get=(password="")=>{

    if(upper.checked){
        password+= generate(uppercase);

    }
    if(lower.checked){
        password+= generate(lowercase); 

    }
    if(num.checked){
        password+= generate(numbers)
    }
    if(symb.checked){
        password+= generate(special)

    }
    
        if(password.length <= total.value){
          return get(password);
        }
        console.log(password);
        head.innerText = truncatestring(password,total.value);
    }

let btn= document.getElementById("btn")
btn.addEventListener("click",
function generate(){

get();

})
function truncatestring(str,num){
if(str.length> num){
    let substr= str.substr(0,num)
    return substr;
}
else
return str;
}

get();
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")
    // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

search.addEventListener("keyup",function (params) {
    console.log(params.key)
    console.log(params.target.value)
    if(params.key=="Enter"){
    getweather(params.target.value)
    }
    if(params.target.value==""){
        weather.innerHTML=` `;
    }
})
const getweather=async(city)=>{
    weather.innerHTML=`<h2>Loading</h2>`//loading toh dikhwayenge na fetchweather se phle hi 
const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
const data= await response.json()
showweather(data)
}

const showweather=(data)=>{
    
    if(data.cod=="404"){
      weather.innerHTML=`
      <h2>City Not Found</h2>
      `
    return;
    }
    console.log(data)
weather.innerHTML=`     
<div>
<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
</div>
<div>
<h2>${data.main.temp}</h2>
<h4>${data.weather[0].main}</h4>
</div>
`

}
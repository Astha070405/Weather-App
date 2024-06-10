let input = document.querySelector('.inp');
let btn = document.getElementById('btn');
let icon = document.querySelector('.icon');
let weather = document.querySelector('.weather');
let description =  document.querySelector('.description');
 let temperature = document.querySelector('.temperature');

btn.addEventListener("click",()=>{
 let cityName = input.value;
 getWeather(cityName);
 


})
function getWeather(cityName){
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${'0c5c2882a603d24519dfe98325ab1e92'}`)
 .then(response=>response.json())
 .then(data => {
     console.log(data);
     const iconCode = data.weather[0].icon;
     icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${iconCode}.png" />`;
     const weatherCity = data.name;
     const weatherCountry = data.sys.country;
     weather.innerHTML = `${weatherCity},${weatherCountry}`;
     const temp = data.main.temp;
     temperature.innerHTML = `${temp}K`;
     const des = data.weather[0].description;
     description.innerHTML = `${des}`;

 })
}

 

    

   



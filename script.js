let url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey="299f591d6546594a975069458a46e840";
let cityname = document.querySelector(".city");
let temprature = document.querySelector(".temprature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let input =document.querySelector(".search input");
let btn =document.querySelector(".search button");
let weathericon  =document.querySelector(".weather-icon");
async function checkweather(city){
    let res = await fetch(url + city + `&appid=${apikey}`);
    let data = await res.json();
    console.log(data);
    cityname.innerHTML = data.name;
    temprature.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity+"%";
    wind.innerHTML = data.wind.speed + "Km/h";
      if(data.weather[0].main == "Clouds"){
        weathericon.setAttribute("src" , "images/clouds.png");
      }
      else if(data.weather[0].main == "Clear"){
        weathericon.setAttribute("src" , "images/clear.png");
      }
      else if(data.weather[0].main == "Rain"){
        
        weathericon.setAttribute("src" , "images/rain.png");
      }
      else if(data.weather[0].main == "Drizzle"){
      
        weathericon.setAttribute("src" , "images/drizzle.png");
      }
      else if(data.weather[0].main == "Mist"){
        weathericon.setAttribute("src" , "images/mist.png");
      }
}
btn.addEventListener("click" , ()=>{
    checkweather(input.value);
})

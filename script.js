const apiKey="bb4b66217a9c00fd5bb8eac17b15b074";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
async function getWeatherByLocation(location){
    const resp=await fetch(apiUrl+location+`&appid=${apiKey}`);
    const respData=await resp.json();
    return respData;
}
const searchBox=document.querySelector(".Search input");
const searchBtn=document.querySelector(".Search button");

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    const city=searchBox.value;
    if(city==""){
        alert("Please write the city name");
        return;
    }
    getWeatherByLocation(city).then(data=>{
        console.log(data);
        updatData(data);
    })  })
    function updatData(data){
        if (data.cod === "404") {
            alert("City not found");
            return;
        }
        document.querySelector(".weather-icon").src = `images/${data.weather[0].main}.png`;
        document.querySelector(".temp").textContent = `${data.main.temp}°C`;
        document.querySelector(".city").textContent = data.name;
        document.querySelector(".humidity").textContent = `${data.main.humidity}%`;
        document.querySelector(".wind").textContent = `${data.wind.speed} km/h`;
        document.querySelector(".weather").style.display="block";
    }



const ApiKey = "43788b3a44a3c4a34c9e19687f2f2bd9";
const ApiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchinput = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response = await fetch(ApiUrl + city + `&appid=${ApiKey}`);
    var data = await response.json();

    console.log(data)

    if(response.status === 404 )
    {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else
    {
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clear")
        {
            weathericon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Clouds")
        {
            weathericon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            weathericon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            weathericon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            weathericon.src = "images/mist.png";
        }
        else if(data.weather[0].main == "Snow")
        {
            weathericon.src = "image/snow.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
        console.log(data);
        console.log(data.weather[0].main);
    };
};

searchbtn.addEventListener("click", function(){
    checkweather(searchinput.value);
});

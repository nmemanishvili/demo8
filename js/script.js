let weather = {
    apiKey: "50c506aabb6421702a3d0366cf31a9da",
    fetchWeather: function (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((Response) => Response.json())
        .then(data => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const {icon, description} = data.weather[0];
        const {temp, humidity }= data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerHTML = `weather in ${name}`;
        document.querySelector(".icon").src = "http://openweathermap.org/img/w/" + icon + ".png";
        document.querySelector(".description").innerHTML = description;
        document.querySelector(".temp").innerHTML = Math.round(temp)  + "°C";
        document.querySelector(".humidity").innerHTML = " Humidity " + humidity;
        document.querySelector(".wind").innerHTML = "wind speed " + speed + " km/h";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?landscape)";
    },
    search: function(jj){
        this.fetchWeather(jj);
    },
};
document.querySelector("#searching").addEventListener("click", function(){

    const weath =  document.getElementById("searchCity").value;
    weather.search(weath);
    console.log(this);
});
// weather.fetchWeather("London");


//lowdash library
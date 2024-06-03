let keys = "cebcd482eda57fa9a6714c1c2ba91885"

function display(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Weather in  " + data.name
    document.querySelector(".temperature").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
    document.querySelector(".humidity").innerHTML =  "Humidity: " + data.main.humidity + "%"
}

async function citysearch(city) {
    let data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric').then((reply) => reply.json())


    display(data)
}

function clickedTheButton() {
    let city = document.querySelector("#input-city").value; 

    citysearch(city)
}   


document.addEventListener("keypress", function(event){
    if(event.key === "Enter") {
     const enter = document.querySelector("#input-city").value;

     citysearch(enter);
}
});






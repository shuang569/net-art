const clock = document.querySelector('.circle');
const gear = document.querySelector('.gear');
const gears = document.querySelectorAll('.gear');
const hand = document.getElementById('clock-hand');
const handSmall = document.getElementById('smallclock-hand');
const topIcon = document.querySelector(".dot.top.icon");
const leftIcon = document.querySelector(".dot.left.icon");
const rightIcon = document.querySelector(".dot.right.icon");
const bottomIcon = document.querySelector(".dot.bottom.icon");
const degs = 0;

const weatherIcons = {
  0:  "☀️",
  1:  "🌤️",
  2:  "⛅",
  3:  "☁️",
  45: "🌫️",
  48: "🌫️",
  51: "🌦️",
  53: "🌦️",
  55: "🌧️",
  61: "🌧️",
  63: "🌧️",
  65: "🌧️",
  71: "🌨️",
  73: "🌨️",
  75: "❄️",
  80: "🌦️",
  95: "⛈️",
  99: "⛈️",
};

const weatherStatus = {
  0:  "Clear",
  1:  "Mostly Clear",
  2:  "Partly Cloudy",
  3:  "Overcast",
  45: "Foggy",
  48: "Icy Fog",
  51: "Light Drizzle",
  53: "Drizzle",
  55: "Heavy Drizzle",
  61: "Light Rain",
  63: "Rain",
  65: "Heavy Rain",
  71: "Light Snow",
  73: "Snow",
  75: "Heavy Snow",
  80: "Rain Showers",
  95: "Thunderstorm",
  99: "Heavy Thunderstorm",
};

function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hours * 30) + (minutes * 0.5) - 180;
    const minuteDeg = (minutes * 6) + (seconds * 0.1) - 180;
    console.log(now.getHours());

    handSmall.style.transform = `rotate(${hourDeg}deg)`;
    hand.style.transform = `rotate(${minuteDeg}deg)`;

    topIcon.classList.remove("glow");
    rightIcon.classList.remove("glow");
    bottomIcon.classList.remove("glow");
    leftIcon.classList.remove("glow");
    bottomIcon.style.border = "2px solid #b17b1893";
    topIcon.style.border = "2px solid #b17b1893";
    rightIcon.style.border = "2px solid #b17b1893";
    leftIcon.style.border = "2px solid #b17b1893";
    bottomIcon.style.border = "2px solid #b17b1893";

    if (hour >= 21 || hour < 5) {
        bottomIcon.classList.add("glow");
        bottomIcon.style.border = "1px solid white";
    } else if (hour >= 5 && hour < 11) {
        leftIcon.classList.add("glow");
        leftIcon.style.border = "1px solid white";
    } else if (hour >= 11 && hour < 17) {
        topIcon.classList.add("glow");
        topIcon.style.border = "1px solid white";
    } else if (hour >= 17 && hour < 21) {
        rightIcon.classList.add("glow");
        rightIcon.style.border = "1px solid white";
    }

    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    document.getElementById('time').textContent = time;
    document.getElementById('date').textContent = date;
}

function updateWeather(){
    navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weathercode&temperature_unit=fahrenheit`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            const code = data.current.weathercode;
            const temp = Math.round(data.current.temperature_2m);
            const weatherEmoji = weatherIcons[code] ?? "Unknown";
            const weathStatus = weatherStatus[code] ?? "?";

            document.getElementById("weatherEmoji").textContent = `${weatherEmoji}`;
            document.getElementById("weather").textContent = weathStatus;
            document.getElementById("temp").textContent = `${temp} °F`;
      });
  });
}

updateClock();
updateWeather();
setInterval(updateClock, 1000);
setInterval(updateWeather, 1000);
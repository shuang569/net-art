const clock = document.querySelector('.circle');
const gear = document.querySelector('.gear');
const gears = document.querySelectorAll('.gear');
const hand = document.querySelector('.clock-hand');
const handSmall = document.querySelector('.smallclock-hand');
const topIcon = document.querySelector(".dot.top.icon");
const leftIcon = document.querySelector(".dot.left.icon");
const rightIcon = document.querySelector(".dot.right.icon");
const bottomIcon = document.querySelector(".dot.bottom.icon");
const degs = 0;

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

    if (hour >= 21 || hour < 5) {
        bottomIcon.classList.add("glow");
    } else if (hour >= 5 && hour < 11) {
        leftIcon.classList.add("glow");
    } else if (hour >= 11 && hour < 17) {
        topIcon.classList.add("glow");
    } else if (hour >= 17 && hour < 21) {
        rightIcon.classList.add("glow");
    }
}

function updateDate(){
    const now = new Date();
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


updateClock();
setInterval(updateClock, 1000);
setInterval(updateDate, 1000);
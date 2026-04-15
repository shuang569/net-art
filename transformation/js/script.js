const clock = document.querySelector('.circle');
const gear = document.querySelector('.gear');
const hand = document.querySelector('.clock-hand');
const topIcon = document.querySelector(".dot.top.icon");
const leftIcon = document.querySelector(".dot.left.icon");
const rightIcon = document.querySelector(".dot.right.icon");
const bottomIcon = document.querySelector(".dot.bottom.icon");
const colors = ["#272f3d", "#b99667", "#e7de87", "#815847"];
let colorIndex = 0;
let degrees = 0;

clock.addEventListener("click", function () {
    degrees += 90;
    hand.style.transform = `rotate(${degrees}deg)`;
    gear.style.transform = `translate(-50%, -50%) rotate(${degrees}deg)`;

    colorIndex = (colorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[colorIndex];

    topIcon.classList.remove("glow");
    rightIcon.classList.remove("glow");
    bottomIcon.classList.remove("glow");
    leftIcon.classList.remove("glow");

    switch (degrees % 360) {
    case 0:
        bottomIcon.classList.toggle("glow");
        console.log("0 degrees");
        break;
    case 90:
        leftIcon.classList.toggle("glow");
        console.log("90 degrees");
        break;
    case 180:
        topIcon.classList.toggle("glow");
        console.log("180 degrees");
        break;
    case 270: 
        rightIcon.classList.toggle("glow");
        console.log("270 degrees");
        break;
    }
});

//rotateHand();
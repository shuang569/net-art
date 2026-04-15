const hand = document.querySelector('.clock-hand');
let degrees = 180;

function rotateHand() {
    degrees += 1;
    hand.style.transform = `rotate(${degrees}deg)`;
    requestAnimationFrame(rotateHand);
}

hand.addEventListener("click", function () {
    degrees += 90;
    hand.style.transform = `rotate(${degrees}deg)`;
});

//rotateHand();
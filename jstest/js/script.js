let button = document.querySelector("#myButton");
let button2 = document.querySelector("#myButton2");
let pClass = document.querySelector(".pClass");
let pID = document.querySelector("#pID");

button.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
  document.querySelector("p").style.color = "white";
  pClass.style.color = "yellow";
  pID.style.cssText = "color: cyan; font-family: 'Papyrus', fantasy; font-size: 30px";
  pID.innerHTML = "Blue button";
});

button2.addEventListener("click", function() {
  document.body.style.backgroundColor = "orange";
  pClass.style.color = "green";
  pID.style.cssText = "color: lime; font-family: Comic Sans MS', 'Comic Sans', cursive;";
  pID.innerHTML = "Orange button";
});

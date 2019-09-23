var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    css.textContent = body.style.background + ";";
}

function randomizer() {
    var r1 = Math.floor(Math.random() *(999999 - 100000)) + 100000;
    var r2 = Math.floor(Math.random() *(999999 - 100000)) + 100000;
    body.style.background = "linear-gradient(to right," +"#" +r1 + "," +"#" +r2 +")";
    color1.value = "#" + r1;
    color2.value = "#" + r2;
    css.textContent = "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    
    console.log(r1,r2);
}

color1.addEventListener("input", setGradient);
   
color2.addEventListener("input", setGradient);
    

css.textContent = 
        "linear-gradient(to right, "
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
body.style.background = "linear-gradient(to right," +color1.value + "," +color2.value +")";
btn.addEventListener("click", randomizer);

    

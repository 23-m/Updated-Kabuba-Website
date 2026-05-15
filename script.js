function joinMessage(){
    alert("Welcome to Kabuba Community Sports Academy");
}
function validateForm(){
    let playerName = document.getElementById("name").value;

    if(playerName === ""){
        alert("Please enter your name");
        return false;
    }

    alert("Application submitted");
    return true;
}
function changeText(){
    document.getElementById("welcome-text").innerHTML =
    "Future Ugandan stars start here";
}
let images = [
  "images/coaches2.jpg",
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
  "images/image5.jpg",
  "images/image6.jpg",
  "images/image7.jpg",
  "images/image8.jpg"
];

let current = 0;

function changeImage() {

  current++;

  if(current >= images.length) {
    current = 0;
  }

  document.getElementById("slider").src = images[current];

}

setInterval(changeImage, 3000);
console.log("sketch.js est bien chargé !");
let stars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  console.log("animation en cours");
  background(0);

  for (let i = 0; i < 5; i++) {
    let star = createStar();
    stars.push(star);
  }

  for (let star of stars) {
    fill(248, 167, 196, random(100, 255));
    ellipse(star.x, star.y, star.size, star.size);
    star.y += star.speedY;
    star.x += star.speedX;

    if (star.y > height) {
      star.y = 0;
      star.x = random(width);
    }

    if (star.x > width) {
      star.x = 0;
    }
  }

  if (stars.length > 500) {
    stars.splice(0, 50);
  }
}

function createStar() {
  return {
    x: random(width),
    y: random(height),
    size: random(1, 3),
    speedX: random(-0.3, 0.3),
    speedY: random(0.2, 0.5),
  };
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

document.addEventListener("DOMContentLoaded", function () {
  const text = "Manal Aiman"; 
  const nameElement = document.getElementById("typing-name");
  let index = 0;

  nameElement.textContent = "";

  function typeLetter() {
    if (index < text.length) {
      nameElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetter, 150);
    }
  }

  setTimeout(typeLetter, 2200);
});



emailjs.init("YOUR_USER_ID");


document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

 
  const now = new Date();
  const formattedTime = now.toLocaleString();
  document.getElementById("time").value = formattedTime;

 
  emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
    function () {
      alert("Message envoyé avec succès !");
    },
    function (error) {
      alert("Erreur, merci de réessayer.");
      console.error(error);
    }
  );
});
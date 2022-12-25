const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
const container = document.querySelector(".images");

let counter = 0;
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  if (counter == 5) {
    counter = -1;
  }

  counter++;
  container.style.backgroundImage = `url(img/${counter}.jpg)`;
}

function prevSlide() {
  container.animate([{ opacity: "0.1" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards",
  });

  if (counter == 0) {
    counter = 5;
  }

  counter--;
  container.style.backgroundImage = `url(img/${counter}.jpg)`;
}

let index = 0;
let slides = document.getElementsByClassName("slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }

  index++;
  if (index > slides.length) {
    index = 1;
  }

  slides[index - 1].classList.add("active");

  setTimeout(showSlide, 3000);
}

showSlide();
const track = document.querySelectorAll(".carousel-slide")
const slides = Array.from(track)
const prevButton = document.querySelector(".carousel-left")
const nextButton = document.querySelector(".carousel-right")

const slideWidth = slides[0].getBoundingClientRect().width;
const buttonWidth = prevButton.getBoundingClientRect().width;


window.addEventListener("scroll", function()
{
  const myTarget = document.querySelector(".carousel-title")
  const targetTop = document.querySelector(".carousel").offsetTop;
  const lowerBound = targetTop * 0.8;
  const upperBound = targetTop * 1.2;

  if(window.scrollY > lowerBound && window.scrollY < upperBound)
  {
    myTarget.style.opacity = 0;
    setTimeout(() => {myTarget.style.display = "none"},2000)
  }
  else{return;}

});


const setSlidePosition = (slide, index) =>
{
  if(window.innerHeight < window.innerWidth)
    {slide.style.left = (slideWidth * index) + (buttonWidth * (index + 1)) + "px";}
  else
  {slide.style.left = slideWidth * index + "px";}
}

slides.forEach(setSlidePosition);

window.addEventListener("orientationchange", function(event) {
  location.reload();
});



const moveToSlide = (currentSlide, targetSlide, amountToMove) =>
{
    slides.forEach(slide => {
    slide.style.transform = "translateX(-" + amountToMove + "px)";
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
    });

    document.querySelector(".carousel-buttons").classList.remove("make-absolute");

    if(targetSlide === slides[slides.length - 1]){
      nextButton.classList.add("button-hidden");
      nextButton.innerHTML = "";
    }
    else if(targetSlide === slides[0]) {
      prevButton.classList.add("button-hidden");
      prevButton.innerHTML = "";
    }
    else {
      nextButton.classList.remove("button-hidden");
      nextButton.innerHTML = ">"
      prevButton.classList.remove("button-hidden");
      prevButton.innerHTML = "<"
    }
}






// Previous slide button
prevButton.addEventListener("click", e => {
  if(prevButton.classList.contains("button-hidden")) {
    e.target.blur();
    return;
  }

  e.target.blur();
  document.querySelector(".carousel-buttons").classList.add("make-absolute");

  if(window.innerHeight < window.innerWidth)
  {
    const currentSlide = document.querySelector(".current-slide");
    const nextSlide = currentSlide.previousElementSibling;
    var amountToMove = parseInt(nextSlide.style.left, 10) - buttonWidth;
    if(amountToMove < 0) {amountToMove = amountToMove * -1;}
    moveToSlide(currentSlide, nextSlide, amountToMove)
  }

  else
  {
    const currentSlide = document.querySelector(".current-slide");
    const nextSlide = currentSlide.previousElementSibling;
    var amountToMove = parseInt(nextSlide.style.left, 10);
    if(amountToMove < 0) {amountToMove = amountToMove * -1;}
    moveToSlide(currentSlide, nextSlide, amountToMove)
  }


});



// Next slide button
nextButton.addEventListener("click", e => {
    if(nextButton.classList.contains("button-hidden")) {
      e.target.blur();
      return;
    }

    e.target.blur();
    document.querySelector(".carousel-buttons").classList.add("make-absolute");

    if(window.innerHeight < window.innerWidth)
    {
      const currentSlide = document.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = parseInt(nextSlide.style.left, 10) - buttonWidth;
      moveToSlide(currentSlide, nextSlide, amountToMove)
    }
    else
    {
      const currentSlide = document.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = parseInt(nextSlide.style.left, 10)
      moveToSlide(currentSlide, nextSlide, amountToMove)
    }

});

const navButton = document.querySelector(".nav-button");
const firstPage = document.querySelector(".first");
const navBar = document.querySelector(".nav");
const closeButton = document.querySelector(".close");
const cover = document.querySelector(".nav-cover");
const page = document.querySelector(".page");
const homeImg = document.querySelector(".img-home");


window.addEventListener("scroll", function()
{
  if(window.scrollY >= firstPage.offsetTop) {
    navButton.style.display = "block";
  }
  else{navButton.style.display = "none";}
});

navButton.addEventListener("click", function()
{
  cover.style.display = "block";
  navBar.style.transform = "translateX(0)";
});

closeButton.addEventListener("click", function()
{
  cover.style.display = "none";
  navBar.style.transform = "translateX(100%)";
});

window.addEventListener("scroll", function()
{
  if(window.scrollY >= page.offsetTop) {
    homeImg.style.visibility = "hidden";
  }
  else{homeImg.style.visibility = "visible";}
});

function parallax(element, distance, speed)
{
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function()
{
  if(window.scrollY > 970) {return;}
  parallax(".img-home", window.scrollY, 0.7);
});

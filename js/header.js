let list = document.querySelector(".header .nav");
let links = document.querySelectorAll(".header ul a");
let bars = document.querySelector(".header > i");

bars.addEventListener("click", function () {
  if (list.style.display == "block") {
    list.style.display = "none";
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
    bars.style.color = "white";
  } else {
    list.style.display = "block";
    bars.classList.remove("fa-bars");
    bars.classList.add("fa-xmark");
    bars.style.color = "red";
  }
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    list.style.display = "none";
    bars.classList.remove("fa-xmark");
    bars.classList.add("fa-bars");
    bars.style.color = "white";
  });
}

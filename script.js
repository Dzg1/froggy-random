let list = document.querySelectorAll(".nav");
let drop = document.querySelectorAll(".drop");
let indicator = document.querySelector("#indicator");

function active(a) {
  drop.forEach((item) => {
      item.style.transitionDelay = "0s";
    item.classList.remove("active");
});
drop[a].style.transitionDelay = ".2s";
drop[a].classList.add("active");
}

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    active(i);
    let calcule = 20 + i*100;
    indicator.style.left= calcule+"px";
 
    indicator.style.height= drop[i].offsetHeight  +"px";
  });
  indicator.addEventListener("mouseout", () => {
    drop[i].classList.remove("active");
    drop[i].style.transitionDelay = "0s";
    indicator.style.left = "-500px";
    indicator.style.height = "30px";
  });

}

let menuToggle = document.getElementById('menuToggle');
let menuContent = document.querySelector('.menu-content');
menuToggle.onclick = () => {
  menuContent.classList.toggle('d-none');
}

let forGround = document.querySelector(".forGround")
let backGround = document.querySelector(".backGround")
forGround.onmouseover = () => {
  backGround.classList.add("forGroundHover")
}
forGround.onmouseout = () => {
  backGround.classList.remove("forGroundHover")
}
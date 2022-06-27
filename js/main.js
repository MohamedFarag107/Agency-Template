let menuToggle = document.getElementById('menuToggle');
let menuContent = document.querySelector('.menu-content');
menuToggle.onclick = () => {
  menuContent.classList.toggle('d-none');
}
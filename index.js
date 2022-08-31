const menu      =  document.getElementById("menu");
const mobilMenu = document.querySelector(".mobil-menu");
const adventure = document.querySelector(".adventure");

menu.addEventListener("click", () => {

    mobilMenu.classList.toggle('.nav-active');

});
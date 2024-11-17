const menuBtn = document.getElementById("menu-btn");
const navBar = document.querySelector(".menu-list");
menuBtn.addEventListener("click", () => {
  navBar.classList.toggle("active");
});

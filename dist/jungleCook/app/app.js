var mobileBtn = document.getElementsByClassName("hamburger-icon")[0];

mobileBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
    mobileBtn.classList.toggle("open");
}

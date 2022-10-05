const menu = document.querySelector('.navbar');
window.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        menu.classList.add("bg-light");
        menu.classList.remove("navbar-dark");
      }else {
        menu.classList.remove("bg-light");
        menu.classList.add("navbar-dark");
      }
});
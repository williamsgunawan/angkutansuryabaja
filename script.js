let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling down → hide navbar
    navbar.style.top = "-80px";
  } else {
    // Scrolling up → show navbar
    navbar.style.top = "0";
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // avoid negative values
});

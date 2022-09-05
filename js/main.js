// Scroll Spy
const navbarLinks = document.querySelectorAll(".navbar__link");

navbarLinks.forEach((link) => {
    link.addEventListener("click", function () {
        setTimeout(() => {
            navbarLinks.forEach((l) => l.classList.remove("active"));
            link.classList.add("active");
        }, 300);
    });
});

window.addEventListener("scroll", function () {
    const scrollSpySections = document.querySelectorAll(".scrollspy");

    scrollSpySections.forEach((v, i) => {
        let rect = v.getBoundingClientRect().y;
        if (rect < window.innerHeight - window.innerHeight / 2) {
            navbarLinks.forEach((v) => v.classList.remove("active"));
            navbarLinks[i].classList.add("active");
        }
    });

    // Navbar Animation On Scroll
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 10) {
        navbar.classList.add("navbar__scrolled");
    } else {
        navbar.classList.remove("navbar__scrolled");
    }
});

const navbar = document.querySelector("#navbar");

// Get the offset position of the navbar
const sticky = 300;

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
};


window.onscroll = function () {
    myFunction();
};

// Implementing smooth scrolling
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = link.getAttribute('href')
        if (href.startsWith("http")) {
            window.location = this.href
        };
        if (href.startsWith("/")) {
            window.location = this.href
        };
        if (href === "#") window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        if (href !== "#" && href.startsWith("#")) {
            const sectionEl = document.querySelector(href)
            sectionEl.scrollIntoView({ behavior: "smooth" })
        };
    })
});
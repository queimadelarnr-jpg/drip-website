

const logo = document.getElementById("dripanim");

const logosMobile = [
    "img/drip1.png",
    "img/drip2.png",
    "img/drip3.png",
    "img/drip4.png",
    "img/drip5.png"
];

const logosDesktop = [
    "img/drip1920.png",
    "img/drip2_1920.png",
    "img/drip3_1920.png",
    "img/drip4_1920.png",
    "img/drip5_1920.png"
];

/*
 * Keep the original 1920 px homepage card composition intact on narrower
 * desktop screens. CSS zoom affects layout as well as visuals, so the footer
 * continues immediately after the proportionally scaled products section.
 * Mobile/tablet layouts keep using the original CSS breakpoints.
 */
function scaleHomepageProducts() {
    const productsHome = document.getElementById("products-home");

    if (!productsHome) return;

    const originalWidth = 1920;
    const mobileBreakpoint = 1024;
    const viewportWidth = window.innerWidth;

    if (viewportWidth > mobileBreakpoint && viewportWidth < originalWidth) {
        productsHome.style.width = `${originalWidth}px`;
        productsHome.style.zoom = String(viewportWidth / originalWidth);
    } else {
        productsHome.style.width = "";
        productsHome.style.zoom = "";
    }
}

scaleHomepageProducts();
window.addEventListener("resize", scaleHomepageProducts);

let current = 0;

function getLogos(){

    if(window.innerWidth >= 1920){
        return logosDesktop;
    }

    return logosMobile;
}

setInterval(() => {

    const activeLogos = getLogos();

    current++;

    if(current >= activeLogos.length){
        current = 0;
    }

    logo.src = activeLogos[current];

}, 1000);


const floatMenu = document.getElementById("floatMenu");
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu-int");

window.addEventListener("scroll", () => {
	if(window.scrollY > 650){
		floatMenu.classList.add("show");
	}else{
		floatMenu.classList.remove("show");
	}
});

const orange = document.querySelector(".orange_parallax");

window.addEventListener("scroll", () => {
	if(window.scrollY < 750){
		orange.classList.remove("show");
	}else{
		orange.classList.add("show");
	}
});


function toggleMenu1(){

    const menu1 = document.getElementById("mobileMenu");
    const icon1 = document.getElementById("hamburgerIcon1");

    menu1.classList.toggle("open");

    if(menu1.classList.contains("open")){

        icon1.classList.remove("fa-bars");
        icon1.classList.add("fa-xmark");

    } else {

        icon1.classList.remove("fa-xmark");
        icon1.classList.add("fa-bars");

    }

}

function toggleMenu(){

    const menu = document.getElementById("floatMenu");
    const icon= document.getElementById("hamburgerIcon");

    menu.classList.toggle("open");

    if(menu.classList.contains("open")){

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

}

function toggleMenu2(){

    const menu2 = document.getElementById("floatMenu1");
    const icon2 = document.getElementById("hamburgerIcon2");

    menu2.classList.toggle("open");

    if(menu2.classList.contains("open")){

        icon2.classList.remove("fa-bars");
        icon2.classList.add("fa-xmark");

    } else {

        icon2.classList.remove("fa-xmark");
        icon2.classList.add("fa-bars");

    }

}

const newsletterForm = document.getElementById("newsletter");
const message = document.getElementById("message");
const emailInput = document.getElementById("subscribe");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        message.textContent =
            `Thanks! ${emailInput.value} has been subscribed.`;

        newsletterForm.reset();
    });
}






































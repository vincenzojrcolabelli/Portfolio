// Scroll Navbar

const nav = document.getElementById('nav');
window.onscroll = function () { 
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250 ) {
        nav.classList.add("nav-colored");
        nav.classList.remove("nav-transparent");
    } 
    else {
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
    }
};


// Animazione Esperienza Scroll

let card1 = document.querySelector('#card1');
let card2 = document.querySelector('#card2');
let card3 = document.querySelector('#card3');
let card4 = document.querySelector('#card4');

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animateCard1');
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(card2);
observer.observe(card4);


let osserva = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animateCard2');
            osserva.unobserve(entry.target);
        }
    });
});

osserva.observe(card1);
osserva.observe(card3);

// Nasconde Offcanvas 

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
        // Trova il menu offcanvas
        let offcanvasElement = document.querySelector('#offcanvasNavbar');
        let offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

        // Chiudi il menu offcanvas
        offcanvasInstance.hide();
    });
});
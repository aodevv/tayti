var scrollpos = window.scrollY;
var header = document.querySelector(".navbar--container");
var navbar = document.querySelector(".navbar");

function add_class_on_scroll() {
    header.classList.add("navbar__hidden");
    navbar.classList.remove("on-scroll");
}

function remove_class_on_scroll() {
    header.classList.remove("navbar__hidden");
    navbar.classList.add("on-scroll");
}

window.addEventListener('scroll', function(){ 
    //Here you forgot to update the value
    scrollpos = window.scrollY;

    if(scrollpos > 180){
        remove_class_on_scroll();
    }
    else {
        add_class_on_scroll();
    }
});
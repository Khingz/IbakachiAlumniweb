//scroll-top add border to nav
const scrollFunction = () => {
    let addBorder = document.querySelector('nav');
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        addBorder.classList.add('nav-border');
    } else {
        addBorder.classList.remove('nav-border');
    }
}
window.onscroll = scrollFunction

//show and hide nav for mobile screen
const burger = document.querySelector('.burger-container');
const toggleNav = () => {
    const navItems = document.querySelector('.main-nav');
    const showcaseLinks = document.querySelector('.showcase-links')
    navItems.classList.toggle('show-nav');
    burger.classList.toggle('toggle');
}
burger.addEventListener('click', toggleNav)


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
    showcaseLinks.classList.toggle('hide');
    burger.classList.toggle('toggle');
}
burger.addEventListener('click', toggleNav)

//hide side nav when a nav link is clicked
const navLinks = document.querySelectorAll('ul.main-nav li');
navLinks.forEach(navLink => {
    navLink.addEventListener('click', () => {
        if(navLink.hasAttribute('href')) {
            console.log('hello');
        }
    })
    
})
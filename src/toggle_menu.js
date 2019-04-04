// Toggle Menu
const menuMobile = document.querySelector('.navbar__menu');
const toggleBtn = document.querySelector('.navbar__toggle');

function toggleMenu() {

    if (toggleBtn.innerText == 'menu') {
        toggleBtn.innerText = 'close';
        menuMobile.classList.add('open');
    } else {
        toggleBtn.innerText = 'menu';
        menuMobile.classList.remove('open');
    }
}

toggleBtn.addEventListener('click',
    toggleMenu
)
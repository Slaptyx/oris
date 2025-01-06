function toggleMenu() {
    document.querySelector('.menu-container').classList.toggle('active');
}

document.querySelector('.menu-button').addEventListener('click', toggleMenu);

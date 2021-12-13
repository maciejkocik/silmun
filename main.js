const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    navigation.classList.toggle('active');
});

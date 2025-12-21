// script.js
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('nav');

menuIcon.onclick = () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('fa-xmark');
};

//ให้เมนูหายไปเมื่อกดลิงก์ (เพื่อความลื่นไหล)
window.onscroll = () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-xmark');
};
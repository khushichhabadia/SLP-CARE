// Selecting the menu button and navbar elements
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

// Toggle the 'fa-times' class for the menu and 'active' class for the navbar when the menu is clicked
menu.onclick = () => {
    menu.classList.toggle('fa-times');  // This changes the menu icon to a close ('x') icon
    navbar.classList.toggle('active');  // This opens/closes the navbar
}

// When scrolling, remove the 'fa-times' and 'active' classes to reset the menu and navbar state
window.onscroll = () => {
    menu.classList.remove('fa-times');  // This resets the menu icon
    navbar.classList.remove('active');  // This hides the navbar
}

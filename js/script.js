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
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll(".navbar a");
    
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: "smooth"
                });
            }
        });
    });

    // Handle form submission
    const bookingForm = document.querySelector("section.book form");
    
    bookingForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for booking! We will contact you shortly.");
    });

    // Chatbot link redirection (chatbot icon click)
    const chatbotIcon = document.querySelector(".chatbot-icon a");
    
    chatbotIcon.addEventListener("click", function(e) {
        e.preventDefault();
        window.open(this.href, "_blank");
    });
});

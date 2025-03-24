// Script the menu to click it
document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("nav-list").classList.toggle("show");
});


// Script the project  when the mous over or out.
const projectItems = document.querySelectorAll('.project-item');

projectItems.forEach(item => {
    item.addEventListener('mouseover', function(){
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });
    item.addEventListener('mouseout', function(){
        this.style.transform = 'scale(1)';
    });
});

//Script the Contact form, sabmit button and add alert if there is a mistake .
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();

       
        if (!name) {
            alert("Please fill in your name.");
            event.preventDefault(); 
            return;
        }

        if (!email) {
            alert("Please fill in your email.");
            event.preventDefault();
            return;
        }

        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (!message) {
            alert("Please fill in your message.");
            event.preventDefault();
            return;
        }

        alert("Form submitted successfully!");
    });
});


//Script the scroll button 
let scrollButton = document.getElementById("scroll");
scrollButton.innerHTML = '↑';
scrollButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
// Scroll-to-Top Button (Dynamic Element)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerHTML = '↑';
scrollToTopButton.id = 'scroll-to-top';
document.body.appendChild(scrollToTopButton);

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault(); // Prevent form submission
            return; //stop the function.
        }

        // Basic Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (email && !emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return; //stop the function.
        }
    });
}

// Navigation Hover Effect (Event Listener)
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('mouseover', function() {
        this.style.textDecoration = 'underline';
    });
    link.addEventListener('mouseout', function() {
        this.style.textDecoration = 'none';
    });
});

// Example of an additonal event listener.
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
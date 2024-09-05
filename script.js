   // Toggle mobile menu visibility
   function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}

// Add the 'visible' class to elements as they scroll into view
window.addEventListener('scroll', function () {
    document.querySelectorAll('.fade-in').forEach(element => {
        const position = element.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (position < viewportHeight - 50) {
            element.classList.add('visible');
        }
    });
});

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const form = event.target;
    const formData = new FormData(form);
    
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for your message, ' + document.getElementById('name').value + '!');
            form.reset(); // Reset the form fields
        } else {
            alert('Oops! There was a problem submitting your form.');
        }
    })
    .catch(error => {
        alert('Oops! There was a problem submitting your form.');
    });
});
// Animate progress bars when they come into view
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const width = progressBar.getAttribute('data-progress');
                progressBar.style.setProperty('--progress-width', width);
                progressBar.classList.add('animate'); // Add class to trigger animation
            }
        });
    }, { threshold: 0.1 }); // Adjust the threshold as needed

    progressBars.forEach(progressBar => {
        observer.observe(progressBar);
    });
});

// Close the mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.remove('show');
    });
});
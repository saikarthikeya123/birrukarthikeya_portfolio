// EmailJS initialization
(function() {
    emailjs.init("YOUR_PUBLIC_KEY");
})();

// Form handling function
function handleSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }
    
    // Phone validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number');
        return false;
    }
    
    // Name validation
    if (name.trim().length < 2) {
        alert('Please enter a valid name');
        return false;
    }
    
    // Message validation
    if (message.trim().length < 10) {
        alert('Please enter a message with at least 10 characters');
        return false;
    }

    // Send email to site owner
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        phone: phone,
        message: message,
        to_email: "durgasweets123@gmail.com"
    })
    .then(function(response) {
        // After sending to owner, send thank you email to submitter
        emailjs.send("YOUR_SERVICE_ID", "YOUR_THANKYOU_TEMPLATE_ID", {
            to_name: name,
            to_email: email
        })
        .then(function(resp) {
            alert('Thank you for your message! A confirmation email has been sent to you. I will get back to you soon.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Your message was sent, but the thank you email could not be delivered.');
        });
    }, function(error) {
        alert('Oops! Something went wrong. Please try again later.');
    });
    
    return false;
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ff5722';
    } else {
        navbar.style.backgroundColor = '#ff5722';
    }
}); 
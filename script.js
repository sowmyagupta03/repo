// const hamburger = document.querySelector('.hamburger');
// const navbarLinks = document.querySelector('.navbar-links');

// hamburger.addEventListener('click', () => {
//     navbarLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
// });
document.addEventListener("DOMContentLoaded", function() {
    const aboutSection = document.querySelector('.about-section');
    aboutSection.classList.add('visible'); // Add the visible class after the content is loaded
});


const sliders = document.querySelectorAll('.iphone-services-slider, .services-slider');

sliders.forEach(slider => {
    let isDown = false;
    let startX;
    let scrollLeft;

    function handleStart(e) {
        isDown = true;
        slider.classList.add('active');
        startX = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }

    function handleEnd() {
        isDown = false;
        slider.classList.remove('active');
    }

    function handleMove(e) {
        if (!isDown) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }

    // Mouse events
    slider.addEventListener('mousedown', handleStart);
    slider.addEventListener('mouseleave', handleEnd);
    slider.addEventListener('mouseup', handleEnd);
    slider.addEventListener('mousemove', handleMove);

    // Touch events
    slider.addEventListener('touchstart', handleStart);
    slider.addEventListener('touchend', handleEnd);
    slider.addEventListener('touchmove', handleMove);
});

function updateBrandInput() {
    const brandSelect = document.getElementById('deviceBrand');
    const brandInput = document.getElementById('deviceBrandInput');
    brandInput.value = brandSelect.value; // Set input value to selected option
}

function updateModelInput() {
    const modelSelect = document.getElementById('deviceModel');
    const modelInput = document.getElementById('deviceModelInput');
    modelInput.value = modelSelect.value; // Set input value to selected option
}
function updateServiceInput() {
    const serviceSelect = document.getElementById('issueDescription');
    const serviceInput = document.getElementById('issueDescriptionInput');
    serviceInput.value = serviceSelect.value; // Set input value to selected option
}

document.addEventListener('DOMContentLoaded', function () {
// Initialize EmailJS with your user ID
(function () {
    emailjs.init("JAExHqmtOFiVY-4eY"); // Replace with your EmailJS user ID
})();

document.getElementById('deviceQuoteForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Send the form data using EmailJS
    emailjs.sendForm('service_iqu2enb', 'template_vnjylz4', this)
        .then(function () {
            console.log('SUCCESS!');
            alert('Your quote request has been sent successfully! We will contact you shortly.');
            document.getElementById('deviceQuoteForm').reset(); // Reset the form
        }, function (error) {
            console.log('FAILED...', error);
            alert('Failed to send quote request. Please try again later or contact +91 9741367860.');
        });
});

function updateBrandInput() {
    const brandSelect = document.getElementById('deviceBrand');
    const brandInput = document.getElementById('deviceBrandInput');
    brandInput.value = brandSelect.value; // Set input value to selected option
}

function updateModelInput() {
    const modelSelect = document.getElementById('deviceModel');
    const modelInput = document.getElementById('deviceModelInput');
    modelInput.value = modelSelect.value; // Set input value to selected option
}



// Smooth scroll to the form when clicking the "GET QUOTE" button
document.querySelector('a[href="#quote-form"]').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
});
});
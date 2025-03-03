// General site functionality
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Don't apply smooth scroll to buttons that need other actions
            if (this.classList.contains('btn') && !this.classList.contains('secondary')) {
                return;
            }
            
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Cookie Banner Script
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const customizeBtn = document.getElementById('customize-cookies');
    const policyLink = document.getElementById('cookie-policy-link');
    
    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        // Show the banner with a slight delay
        setTimeout(() => {
            cookieBanner.classList.add('active');
        }, 1000);
    }
    
    // Accept cookies
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookiesAccepted', 'true');
        cookieBanner.classList.remove('active');
    });
    
    // Customize cookies - you can expand this functionality later
    customizeBtn.addEventListener('click', function() {
        alert('Cookie preferences will be added soon!');
        // You could show a more detailed modal here in the future
    });
    
    // Policy link - prevent default and show alert for now
    policyLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Detailed cookie policy will be added soon!');
        // In the future, link to a proper cookie policy page
    });
});

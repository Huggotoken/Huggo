console.log("Scripts.js loaded successfully");

// Execute immediately rather than waiting for DOMContentLoaded
(function() {
    // Cookie Banner functionality
    function setupCookieBanner() {
        console.log("Setting up cookie banner");
        const cookieBanner = document.getElementById('cookie-banner');
        
        if (!cookieBanner) {
            console.error("Cookie banner element not found");
            return;
        }
        
        console.log("Cookie banner found");
        
        // Check if cookies were already accepted
        if (!localStorage.getItem('cookiesAccepted')) {
            console.log("Cookies not accepted yet, showing banner");
            // Show the banner with a slight delay
            setTimeout(function() {
                cookieBanner.classList.add('active');
                console.log("Banner activated");
            }, 1000);
        } else {
            console.log("Cookies already accepted");
        }
        
        // Set up button event listeners
        const acceptBtn = document.getElementById('accept-cookies');
        if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
                console.log("Accept button clicked");
                localStorage.setItem('cookiesAccepted', 'true');
                cookieBanner.classList.remove('active');
            });
        }
        
        const customizeBtn = document.getElementById('customize-cookies');
        if (customizeBtn) {
            customizeBtn.addEventListener('click', function() {
                console.log("Customize button clicked");
                alert('Cookie preferences will be added soon!');
            });
        }
        
        const policyLink = document.getElementById('cookie-policy-link');
        if (policyLink) {
            policyLink.addEventListener('click', function(e) {
                console.log("Policy link clicked");
                e.preventDefault();
                alert('Detailed cookie policy will be added soon!');
            });
        }
    }
    
    // Set up smooth scrolling
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                // Don't apply smooth scroll to buttons that need other actions
                if (this.classList.contains('btn') && !this.classList.contains('secondary')) {
                    return;
                }
                
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
        // If not, wait for it to load
        document.addEventListener('DOMContentLoaded', function() {
            console.log("DOM loaded via event");
            setupCookieBanner();
            setupSmoothScrolling();
        });
    } else {
        // DOM already loaded, run immediately
        console.log("DOM already loaded");
        setupCookieBanner();
        setupSmoothScrolling();
    }
})(); // Self-executing function

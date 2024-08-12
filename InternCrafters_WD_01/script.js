document.addEventListener("DOMContentLoaded", function() {
    const icon = document.querySelector('.icon');
    const navMenu = document.querySelector('.nav-link');

    // Toggle the menu on small screens
    icon.addEventListener('click', function() {
        navMenu.classList.toggle('open');
    });

    // Handle screen resizing to reset the menu state
    window.addEventListener('resize', function() {
        if (window.innerWidth > 909) {
            // On large screens, ensure the menu is always visible and remove the 'open' class
            navMenu.classList.remove('open');
        }
    });

    // Add sticky class on scroll
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        nav.classList.toggle('sticky', window.scrollY > 0);
    });
});

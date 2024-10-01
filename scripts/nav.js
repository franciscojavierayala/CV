document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active-page');
            link.setAttribute('aria-current', 'page');
            link.setAttribute('tabindex', '-1');
            link.classList.add('disabled-link');
        }
    });
});
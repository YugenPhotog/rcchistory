// ========================================
// Main JavaScript
// ========================================

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
const header = document.querySelector('.site-header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active nav link highlighting
const navLinks = document.querySelectorAll('.main-nav a');
// Works with or without ".html" in the address (the live site serves extensionless URLs)
const pageKey = (path) => {
    const last = (path || '').split('#')[0].split('?')[0].replace(/\/+$/, '').split('/').pop();
    const name = (last || 'index').replace(/\.html$/, '');
    return name === '' ? 'index' : name;
};
const onFolderRoot = /\/$/.test(window.location.pathname);
const currentPage = onFolderRoot ? 'index' : pageKey(window.location.pathname);

navLinks.forEach(link => {
    if (pageKey(link.getAttribute('href')) === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});

// Card hover effect enhancement (optional - CSS handles most of it)
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

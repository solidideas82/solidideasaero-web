// Smooth Scrolling Navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Active Link Highlighting on Scroll
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});

sections.forEach(section => {
    observer.observe(section);
});

// Fade-in Animations using Intersection Observer
const fadeIns = document.querySelectorAll('.fade-in');

const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
        }
    });
});

fadeIns.forEach(fade => {
    fadeObserver.observe(fade);
});
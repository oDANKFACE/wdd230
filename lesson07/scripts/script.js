const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            img.setAttribute('src', src);
            img.onload = () => {
                img.classList.add('fade-in');
            };
            observer.unobserve(img);
        }
    });
};

const observer = new IntersectionObserver(callback, options);

const lazyImages = document.querySelectorAll('.lazy-image');
lazyImages.forEach(image => {
    observer.observe(image);
});


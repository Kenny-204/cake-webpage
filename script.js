'use strict';

const sections = document.querySelectorAll('.section');

const revealSections = function () {
    const secObserve = function (entries,observer) {
        const [entry] = entries;
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden');
        observer.unobserve(entry.target);
    }
    const options = {
        root: null,
        threshold: 0.3,
    }
    const sectionObserver = new IntersectionObserver(secObserve, options);
    sections.forEach(el => {
        el.classList.add('section--hidden')
        sectionObserver.observe(el)
    })
}
revealSections();

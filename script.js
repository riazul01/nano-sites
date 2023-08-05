// toggle bar
(function () {
    const toggler = document.querySelector('.toggler');
    
    toggler.addEventListener('click', () => {
        toggler.classList.toggle('active');
    });
})();
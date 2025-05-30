const navElement = document.querySelector('.navbar');
const textElement = document.querySelectorAll('.scrolledLink');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
        navElement.classList.add('bg-secondary');
        navElement.classList.remove('navbar-light');

        textElement.forEach(link => {
            link.classList.add('text-dark');
            link.classList.remove('text-light');
        });
    } else {
        navElement.classList.add('navbar-light');
        navElement.classList.remove('bg-secondary');

        textElement.forEach(link => {

            link.classList.add('text-light');
            link.classList.remove('text-dark');
        });
    }
});



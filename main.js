document.addEventListener('DOMContentLoaded', (event) => {
        const themeToggle = document.getElementById('themeToggle');
        const icon = themeToggle.querySelector('i');
        const htmlElement = document.documentElement;
    
        themeToggle.addEventListener('click', () => {
            if (htmlElement.getAttribute('data-bs-theme') === 'dark') {
                htmlElement.setAttribute('data-bs-theme', 'light');
                icon.classList.replace('bi-moon-fill', 'bi-sun-fill');
            } else {
                htmlElement.setAttribute('data-bs-theme', 'dark');
                icon.classList.replace('bi-sun-fill', 'bi-moon-fill');
            }
        });
    });
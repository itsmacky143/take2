document.addEventListener("DOMContentLoaded", () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let scrollPosition = window.scrollY;

        sections.forEach((section) => {
            let offset = section.offsetTop - 150;
            let height = section.offsetHeight;
            let id = section.getAttribute('id');

            if (scrollPosition >= offset && scrollPosition < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });

                document.querySelector('header nav a[href="#' + id + '"]').classList.add('active');
            }
        });
    });

    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    });
});

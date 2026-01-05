document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Управление хедером при скролле
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        header.classList.toggle('header--scrolled', window.scrollY > 50);
    });

    // 2. Мобильное меню
    const burger = document.getElementById('burger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.mobile-menu__link');

    const toggleMenu = () => {
        burger.classList.toggle('is-active');
        mobileMenu.classList.toggle('is-active');
        document.body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : '';
    };

    burger.addEventListener('click', toggleMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('is-active')) toggleMenu();
        });
    });

    // 3. Анимация Hero секции (GSAP)
    // Анимация появления заголовка
    gsap.from(".hero__title", {
        duration: 1.2,
        y: 60,
        opacity: 0,
        ease: "power4.out",
        delay: 0.2
    });

    gsap.from(".hero__subtitle", {
        duration: 1.2,
        y: 30,
        opacity: 0,
        ease: "power4.out",
        delay: 0.4
    });

    gsap.from(".hero__actions", {
        duration: 1.2,
        y: 20,
        opacity: 0,
        ease: "power4.out",
        delay: 0.6
    });

    gsap.from(".glass-card", {
        duration: 1.5,
        x: 100,
        opacity: 0,
        rotationY: 0,
        ease: "power2.out",
        delay: 0.8
    });

    // 4. Плавный скролл
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
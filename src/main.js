document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Изменение хедера при скролле
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header--scrolled');
        } else {
            header.classList.remove('header--scrolled');
        }
    });

    // 2. Мобильное меню (базовое переключение)
    const burger = document.getElementById('burger-menu');
    const nav = document.getElementById('nav-menu');

    burger.addEventListener('click', () => {
        // Здесь можно добавить полноценную анимацию раскрытия
        console.log('Mobile menu toggled');
    });

    // 3. Плавный скролл для ссылок
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
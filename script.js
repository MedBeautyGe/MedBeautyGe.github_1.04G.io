// Переключение языков
document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-btn');
    const elements = document.querySelectorAll('[data-ru], [data-en]');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');

            // Обновляем активный язык
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Обновляем текст на странице
            elements.forEach(element => {
                const text = element.getAttribute(`data-${lang}`);
                if (text) {
                    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                        element.placeholder = text;
                    } else {
                        element.textContent = text;
                    }
                }
            });

            // Обновляем заголовок страницы
            const title = document.querySelector('title');
            title.textContent = title.getAttribute(`data-${lang}`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Переключение вкладок
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabs = document.querySelectorAll('.tab');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Удаляем активный класс у всех кнопок
            tabButtons.forEach(btn => btn.classList.remove('active'));
            // Добавляем активный класс к нажатой кнопке
            button.classList.add('active');
            
            // Скрываем все вкладки
            tabs.forEach(tab => tab.classList.remove('active'));
            
            // Показываем выбранную вкладку
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Мобильное меню
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    
    // Закрытие мобильного меню при клике на пункт меню
    const menuItems = document.querySelectorAll('.menu a');
    
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // FAQ аккордеон
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Если элемент уже открыт - закрываем
            if (item.classList.contains('active')) {
                item.classList.remove('active');
            } else {
                // Закрываем все элементы
                faqItems.forEach(faqItem => {
                    faqItem.classList.remove('active');
                });
                
                // Открываем выбранный
                item.classList.add('active');
            }
        });
    });
    
    // Плавная прокрутка к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            const target = document.querySelector(href);
            
            if (target) {
                const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Обработка отправки формы
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить логику валидации и отправки формы
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // Пример вывода данных в консоль (в реальном проекте здесь будет отправка на сервер)
            console.log('Form submitted with values:', formValues);
            
            // Пример отображения сообщения об успешной отправке
            alert('Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.');
            
            // Очистка формы
            contactForm.reset();
        });
    }
    
    // Анимация появления элементов при скролле
    function animateOnScroll() {
        const elements = document.querySelectorAll('.program-block, .case-item, .benefit-item, .pricing-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-in');
            }
        });
    }
    
    // Добавляем класс для анимации
    document.querySelectorAll('.program-block, .case-item, .benefit-item, .pricing-card').forEach(el => {
        el.classList.add('animate-item');
    });
    
    // Запускаем анимацию при загрузке и скролле
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Проверяем видимые элементы при загрузке
});

// Дополнительные стили для анимации (добавляются динамически)
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .animate-item {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .animate-in {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
`); 
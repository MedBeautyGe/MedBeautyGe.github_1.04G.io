const translations = {
    ru: {
        home: "Главная",
        services: "Услуги",
        contact: "Контакты",
        slogan: "СОВЕРШЕНСТВО ДОСТУПНО",
        heroTitle: "Ваш гид в мире медицины Грузии",
        heroSub: "Организация лечения, трансфера и проживания «под ключ»",
        ourServices: "Наши услуги",
        travel: "Логистика",
        travelDesc: "Бронирование билетов и отелей",
        rhino: "Ринопластика",
        rhinoDesc: "Пластическая хирургия мирового уровня",
        care: "Реабилитация",
        careDesc: "Послеоперационный уход и поддержка",
        contactUs: "Свяжитесь с нами",
        namePlaceholder: "Имя",
        emailPlaceholder: "Email",
        messagePlaceholder: "Сообщение",
        send: "Отправить"
    },
    en: {
        home: "Home",
        services: "Services",
        contact: "Contact",
        slogan: "PERFECTION IS ACCESSIBLE",
        heroTitle: "Your Guide to Medical Services in Georgia",
        heroSub: "End-to-End Treatment Planning and Accommodation",
        ourServices: "Our Services",
        travel: "Travel Logistics",
        travelDesc: "Flight and Hotel Booking",
        rhino: "Rhinoplasty",
        rhinoDesc: "World-Class Plastic Surgery",
        care: "Rehabilitation",
        careDesc: "Postoperative Care and Support",
        contactUs: "Contact Us",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        messagePlaceholder: "Message",
        send: "Send"
    },
    de: {
        home: "Startseite",
        services: "Dienstleistungen",
        contact: "Kontakt",
        slogan: "VOLLKOMMENHEIT IST ERREICHBAR",
        heroTitle: "Ihr Führer in der georgischen Medizin",
        heroSub: "Komplette Organisation von Behandlung und Unterkunft",
        ourServices: "Unsere Leistungen",
        travel: "Reiselogistik",
        travelDesc: "Flug- und Hotelbuchung",
        rhino: "Rhinoplastik",
        rhinoDesc: "Plastische Chirurgie auf Weltniveau",
        care: "Rehabilitation",
        careDesc: "Postoperative Betreuung und Unterstützung",
        contactUs: "Kontaktieren Sie uns",
        namePlaceholder: "Name",
        emailPlaceholder: "E-Mail",
        messagePlaceholder: "Nachricht",
        send: "Senden"
    }
};

// Инициализация языка по умолчанию
document.addEventListener('DOMContentLoaded', () => changeLanguage('ru'));

function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translations[lang][key];
        
        if (translation) {
            if (element.placeholder) {
                element.placeholder = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}
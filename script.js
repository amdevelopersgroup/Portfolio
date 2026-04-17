// Translations
var translations = {
  en: {
    'nav-home':        'Home',
    'nav-about':       'About',
    'nav-projects':    'Projects',
    'nav-contact':     'Contact',
    'hero-p':          'We specialize in creating high-performance web interfaces, paying attention to every detail of the code. Our team ensures seamless adaptability to any device, integration with modern content management systems, and loading speed optimization, so your project runs fast, stable, and delivers results from day one.',
    'about-heading':   'About Us',
    'about-left-p':    'Transparent development process: you always know what stage your project is at. Our team works in sync, guaranteeing results that exceed expectations.',
    'about-right-p':   'We build modern websites where aesthetics meet flawless code. Our priority is user experience and fast loading.',
    'projects-heading':'Our Projects',
    'project1-desc':   'A tool for generating Fibonacci sequences and performing fast mathematical calculations.',
    'project2-desc':   'A simple game where the user competes against the computer by choosing rock, paper, or scissors.',
    'project3-desc':   'A tool for matrix operations including addition, multiplication, and transformations.',
    'project4-desc':   'A dental service for treatment, prosthetics, and high-end cosmetic dentistry.',
    'project-link':    'View Project',
    'contact-heading': 'Contact Us',
    'contact-email':   'Email:'
  },
  ru: {
    'nav-home':        'Главная',
    'nav-about':       'О нас',
    'nav-projects':    'Проекты',
    'nav-contact':     'Контакты',
    'hero-p':          'Мы специализируемся на создании высокопроизводительных веб-интерфейсов, уделяя внимание каждой детали кода. Наша команда обеспечивает безупречную адаптивность под любые устройства, интеграцию с современными системами управления контентом и оптимизацию скорости загрузки, чтобы ваш проект работал быстро, стабильно и приносил результат с первого дня запуска.',
    'about-heading':   'О нас',
    'about-left-p':    'Прозрачный процесс разработки: вы всегда знаете, на каком этапе находится ваш проект. Наша команда работает слаженно, гарантируя результат, который превосходит ожидания.',
    'about-right-p':   'Мы создаем современные сайты, где эстетика сочетается с безупречным кодом. Наш приоритет — удобство пользователя и быстрая загрузка.',
    'projects-heading':'Наши проекты',
    'project1-desc':   'Инструмент для генерации последовательности Фибоначчи и быстрых математических вычислений.',
    'project2-desc':   'Простая игра, где пользователь соревнуется с компьютером, выбирая камень, ножницы или бумагу.',
    'project3-desc':   'Инструмент для вычислений с матрицами, сложения, умножения и преобразований.',
    'project4-desc':   'Стоматологический сервис для лечения, протезирования и эстетической стоматологии высокого уровня.',
    'project-link':    'Посмотреть проект',
    'contact-heading': 'Свяжитесь с нами',
    'contact-email':   'Эл. почта:'
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  try { localStorage.setItem('lang', lang); } catch (e) {}
}

// Language toggle
document.querySelectorAll('.lang-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    setLanguage(btn.getAttribute('data-lang'));
  });
});

// Smooth-scroll nav (uses data-section instead of text)
document.querySelectorAll('.nav-links li').forEach(function (item) {
  item.addEventListener('click', function () {
    var sectionId = item.getAttribute('data-section');
    var target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Scroll-reveal for project cards
document.addEventListener('DOMContentLoaded', function () {
  var savedLang = 'en';
  try { savedLang = localStorage.getItem('lang') || 'en'; } catch (e) {}
  setLanguage(savedLang);

  var cards = document.querySelectorAll('.project-card');

  if (!('IntersectionObserver' in window)) {
    cards.forEach(function (c) { c.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  cards.forEach(function (c) { observer.observe(c); });
});

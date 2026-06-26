// ===== ФАКТЫ (расширенный список) =====
const facts = [
    'Начал профессиональную карьеру в возрасте 6 лет в группе The Jackson 5.',
    'Альбом "Thriller" — самый продаваемый в истории: более 100 млн копий.',
    'Обладатель 13 премий Грэмми из 38 номинаций.',
    'Популяризировал «лунную походку» (Moonwalk) в 1983 году.',
    'Купил ранчо "Neverland" в 1988 году за $19,5 млн.',
    'Написал более 500 песен за карьеру.',
    'Собрал более $60 млн для борьбы с голодом через песню "We Are the World".',
    'Дважды включён в Зал славы рок-н-ролла.',
    'Был самым высокооплачиваемым музыкантом 1980-х.',
    'Клип "Thriller" признан самым влиятельным музыкальным видео всех времён.',
    'Имел 13 синглов, достигших №1 в Billboard Hot 100.',
    'Был веганом и строго следил за диетой.',
    'Обожал животных: держал жирафа, слонов, тигра и крокодила.',
    'Первым из чернокожих артистов появился на MTV с клипом "Billie Jean".',
    'Продал более 1 миллиарда записей по всему миру.',
    'Его отец был строгим и часто применял физические наказания.',
    'Страдал от витилиго — заболевания кожи, из-за которого она теряла пигмент.',
    'В 1993 году получил премию "Grammy Legend Award" — одну из самых престижных.',
    'Его танец "Anti-Gravity Lean" в клипе "Smooth Criminal" стал легендарным.',
    'Был дважды женат: на Лизе Марии Пресли и Дебби Роу.',
    'У него трое детей: Принс, Пэрис и Биги (ранее Бланкет).',
    'Его похороны в 2009 году смотрели более 1 миллиарда человек по всему миру.'
];

let currentIndex = -1;

const display = document.getElementById('fact-display');
const btn = document.getElementById('fact-btn');
const counter = document.getElementById('fact-counter');

function showFact() {
    display.classList.add('fade');

    setTimeout(() => {
        let idx;
        do {
            idx = Math.floor(Math.random() * facts.length);
        } while (idx === currentIndex && facts.length > 1);

        currentIndex = idx;
        display.textContent = '📌 ' + facts[currentIndex];
        display.classList.remove('fade');
    }, 300);
}

btn.addEventListener('click', showFact);

// ===== ПАРЯЩИЕ ЭЛЕМЕНТЫ =====
function createFloatingElements() {
    const container = document.getElementById('floating-elements');
    const symbols = ['♪', '♫', '★', '✦', '◈', '◇', '○', '●', '♦', '♢', '✧', '✶', '✷', '✸', '❋', '✧'];
    const count = 40;

    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'float-item';
        
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const size = 14 + Math.random() * 22;
        const left = Math.random() * 100;
        const duration = 20 + Math.random() * 30;
        const delay = Math.random() * 25;
        const opacity = 0.06 + Math.random() * 0.12;

        el.textContent = symbol;
        el.style.cssText = `
            left: ${left}%;
            top: ${Math.random() * 100}%;
            font-size: ${size}px;
            animation-duration: ${duration}s;
            animation-delay: ${delay}s;
            opacity: ${opacity};
            color: ${Math.random() > 0.5 ? '#b8a88a' : '#4a4a6a'};
        `;

        container.appendChild(el);
    }
}

// ===== ЗАГРУЗКА =====
document.addEventListener('DOMContentLoaded', () => {
    // Парящие элементы
    createFloatingElements();

    // Первый факт
    const idx = Math.floor(Math.random() * facts.length);
    currentIndex = idx;
    display.textContent = '📌 ' + facts[idx];
    counter.textContent = facts.length;

    // Плавное появление секций с задержкой
    document.querySelectorAll('section').forEach((el, i) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(15px)';
        setTimeout(() => {
            el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 + i * 100);
    });
});

// ===== КОНСОЛЬ =====
console.log('👑 Майкл Джексон · 1958–2009');
console.log('📀 Thriller — самый продаваемый альбом в истории');
console.log('🎵 ' + facts.length + ' интересных фактов о Короле поп-музыки');
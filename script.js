const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Тёмная тема Telegram под цвет сайта
tg.setHeaderColor('#0b0d17');
tg.setBackgroundColor('#0b0d17');

/**
 * Открывает платёжную ссылку
 * @param {string} url - URL платёжной формы
 */
function openPayment(url) {
    if (url && !url.includes('your-payment-link')) {
        tg.openLink(url);
    } else {
        tg.showAlert('⚠️ Замените ссылку на свою платёжную ссылку в коде.');
    }
}

/**
 * Открывает Telegram-чат с психологом
 */
function openContact() {
    // Замените 'your_psychologist_username' на свой юзернейм (например, 'anna_psy')
    tg.openTelegramLink('https://t.me/galaxy_feelings');
}

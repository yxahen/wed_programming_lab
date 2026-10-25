const VARIANT = 7; // порядковий номер у журналі групи

/* ---------- 1. ОС і браузер -> localStorage -> футер ---------- */
function saveSystemInfo() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        vendor: navigator.vendor,
        language: navigator.language,
        languages: navigator.languages.join(', '),
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
        hardwareConcurrency: navigator.hardwareConcurrency,
        deviceMemory: navigator.deviceMemory ?? 'невідомо',
        screen: `${screen.width}x${screen.height}`,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    // localStorage зберігає лише рядки
    for (const [key, value] of Object.entries(info)) {
        localStorage.setItem(`sys_${key}`, String(value));
    }
}

function renderStorage() {
    const list = document.getElementById('storageInfo');
    list.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const li = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = key;
        li.append(strong, `: ${localStorage.getItem(key)}`);
        list.appendChild(li);
    }
}

/* ---------- 2. Відгуки з JSONPlaceholder ---------- */
async function loadReviews() {
    const box = document.getElementById('reviews');
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        );
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const comments = await response.json();

        box.innerHTML = '';
        comments.forEach((c) => { // у порядку отримання
            const item = document.createElement('article');
            item.className = 'review';
            item.innerHTML = '<h4></h4><small></small><p></p>';
            item.querySelector('h4').textContent = c.name;
            item.querySelector('small').textContent = c.email;
            item.querySelector('p').textContent = c.body;
            box.appendChild(item);
        });
    } catch (error) {
        box.textContent = 'Не вдалося завантажити відгуки. Спробуйте пізніше.';
        console.error('Error:', error);
    }
}

/* ---------- 3. Модальне вікно через 1 хвилину ---------- */
function setupModal() {
    const modal = document.getElementById('modal');
    const close = () => {
        modal.hidden = true;
        sessionStorage.setItem('modalClosed', '1'); // не показувати повторно в сесії
    };
    document.getElementById('modalClose').addEventListener('click', close);
    modal.addEventListener('click', (e) => { if (e.target === modal) close(); });

    if (sessionStorage.getItem('modalClosed')) return;
    setTimeout(() => { modal.hidden = false; }, 60000);
}

/* ---------- 4. Денна / нічна тема ---------- */
function themeByTime() {
    const hour = new Date().getHours();
    return hour >= 7 && hour < 21 ? 'light' : 'dark'; // день: 07:00–21:00
}

function applyTheme(theme) {
    document.body.classList.toggle('dark', theme === 'dark');
    document.getElementById('themeToggle').textContent =
        theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
    localStorage.setItem('theme', theme);
    renderStorage();
}

function setupTheme() {
    applyTheme(sessionStorage.getItem('themeManual') || themeByTime());

    document.getElementById('themeToggle').addEventListener('click', () => {
        const next = document.body.classList.contains('dark') ? 'light' : 'dark';
        sessionStorage.setItem('themeManual', next);
        applyTheme(next);
    });

    // автоперемикання за часом, якщо тему не обирали вручну
    setInterval(() => {
        if (!sessionStorage.getItem('themeManual')) applyTheme(themeByTime());
    }, 60000);
}

document.addEventListener('DOMContentLoaded', () => {
    saveSystemInfo();
    setupTheme();     // викликає renderStorage()
    loadReviews();
    setupModal();
});

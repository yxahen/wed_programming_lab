import { useEffect, useState } from 'react';

function Footer({ theme }) {
  const [info, setInfo] = useState({});

  useEffect(() => {
    // 1. зчитуємо дані про ОС і браузер та зберігаємо в localStorage
    const data = {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      vendor: navigator.vendor,
      language: navigator.language,
      cookieEnabled: String(navigator.cookieEnabled),
      hardwareConcurrency: String(navigator.hardwareConcurrency),
      screen: `${screen.width}x${screen.height}`,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    };
    Object.entries(data).forEach(([k, v]) => localStorage.setItem(`sys_${k}`, v));

    // 2. читаємо все з localStorage для відображення
    const stored = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== 'theme') stored[key] = localStorage.getItem(key);
    }
    setInfo(stored);
  }, []);

  return (
    <footer className="bg-indigo-900 p-6 text-center text-indigo-100 dark:bg-slate-950">
      <p>
        Мій профіль у{' '}
        <a
          href="https://github.com/yxahen"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-violet-100 hover:underline"
        >
          GitHub
        </a>
      </p>
      <p className="mt-1 text-sm text-indigo-300">&copy; 2026 Лілія. Зібрано за допомогою React + Vite.</p>

      <details open className="mx-auto mt-4 max-w-5xl text-left text-xs text-indigo-200">
        <summary className="cursor-pointer text-sm">Дані з localStorage</summary>
        <ul className="mt-2 list-disc space-y-1 pl-5 break-words">
          <li><strong>theme</strong>: {theme}</li>
          {Object.entries(info).map(([key, value]) => (
            <li key={key}><strong>{key}</strong>: {value}</li>
          ))}
        </ul>
      </details>
    </footer>
  );
}

export default Footer;

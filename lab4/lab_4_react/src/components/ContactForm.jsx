import { useEffect, useState } from 'react';

// Замініть ВАШ_ID на endpoint вашої форми у Formspree
const FORMSPREE_ACTION = 'https://formspree.io/f/mbggdggb';

const inputClass =
  'mt-1 w-full rounded-md border border-slate-300 bg-white p-2 text-slate-800 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // якщо користувач уже закрив вікно в цій сесії — не показуємо знову
    if (sessionStorage.getItem('modalClosed')) return;

    const timer = setTimeout(() => setIsOpen(true), 60000); // 1 хвилина
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setIsOpen(false);
    sessionStorage.setItem('modalClosed', '1');
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4"
          onClick={close}
        >
          <div
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl bg-white p-6 text-slate-700 shadow-xl dark:bg-slate-800 dark:text-slate-200"
          >
            <h2 className="mb-4 text-2xl font-bold text-indigo-800 dark:text-indigo-300">
              Зворотний зв'язок
            </h2>
            <form action={FORMSPREE_ACTION} method="POST" className="space-y-3">
              <label className="block">Ім'я
                <input type="text" name="name" required className={inputClass} />
              </label>
              <label className="block">Email
                <input type="email" name="email" required className={inputClass} />
              </label>
              <label className="block">Номер телефону
                <input type="tel" name="phone" required className={inputClass} />
              </label>
              <label className="block">Повідомлення
                <textarea name="message" rows="4" required className={inputClass} />
              </label>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-md border border-slate-300 px-4 py-2 dark:border-slate-600"
                >
                  Закрити
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 font-semibold text-white hover:bg-indigo-700"
                >
                  Надіслати
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;


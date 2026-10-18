function Footer() {
  return (
    <footer className="bg-slate-800 p-6 text-center text-slate-200">
      <p>
        Мій профіль у{' '}
        <a
          href="https://github.com/yxahen"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-amber-200 hover:underline"
        >
          GitHub
        </a>
      </p>
      <p className="mt-1 text-sm text-slate-400">
        &copy; 2026 Лілія. Зібрано за допомогою React + Vite + Tailwind.
      </p>
    </footer>
  );
}

export default Footer;

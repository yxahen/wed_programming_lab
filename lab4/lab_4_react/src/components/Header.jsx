function Header({ theme, onToggleTheme }) {
  return (
    <header className="flex flex-col items-center border-b-8 border-indigo-600 bg-indigo-400 p-8 text-center text-white shadow-lg dark:border-indigo-400 dark:bg-indigo-900">
      <h1 className="mb-2 text-4xl font-bold tracking-wide">Жируха Лілія</h1>
      <p className="text-xl opacity-90">Студентка спеціальності «Кібербезпека» (Варіант 7)</p>
      <p className="mt-3 text-sm sm:text-base">
        Email:{' '}
        <a
          href="mailto:yxahen@gmail.com"
          className="font-semibold text-violet-100 underline-offset-4 hover:underline"
        >
          yxahen@gmail.com
        </a>{' '}
        | Телефон: +380 50 000 00 00
      </p>
      <button
        type="button"
        onClick={onToggleTheme}
        className="mt-4 rounded-md bg-white/90 px-4 py-2 font-semibold text-indigo-900 transition hover:bg-white"
      >
        {theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема'}
      </button>
    </header>
  );
}

export default Header;

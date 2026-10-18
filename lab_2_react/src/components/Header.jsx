function Header() {
  return (
    <header className="flex flex-col items-center border-b-8 border-teal-900 bg-teal-700 p-8 text-center text-white shadow-lg">
      <h1 className="mb-2 text-4xl font-bold tracking-wide">Жируха Лілія</h1>
      <p className="text-xl opacity-90">Студентка спеціальності «Кібербезпека» (Варіант 7)</p>
      <p className="mt-3 text-sm sm:text-base">
        Email:{' '}
        <a
          href="mailto:yxahen@gmail.com"
          className="font-semibold text-amber-200 underline-offset-4 hover:underline"
        >
          yxahen@gmail.com
        </a>{' '}
        | Телефон: +380 50 000 00 00
      </p>
    </header>
  );
}

export default Header;

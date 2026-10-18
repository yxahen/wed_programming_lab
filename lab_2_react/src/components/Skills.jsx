function Skills() {
  const tech = ['Python', 'C#', 'Основи HTML5 та CSS3', 'Git / GitHub'];
  const langs = ['Українська — рідна', 'Англійська — B1 (Intermediate)'];

  return (
    <aside className="h-fit rounded-xl border-l-4 border-teal-700 bg-white p-6 shadow-md transition hover:shadow-xl">
      <h2 className="mb-4 text-2xl font-bold text-teal-900">Навички</h2>

      <h3 className="mb-2 border-b-2 border-dashed border-teal-700 pb-1 text-lg font-semibold">
        Технології
      </h3>
      <ul className="mb-6 space-y-1">
        {tech.map((item) => (
          <li key={item} className="rounded px-2 py-1 hover:bg-teal-50 hover:text-teal-800">
            {item}
          </li>
        ))}
      </ul>

      <h3 className="mb-2 text-lg font-semibold text-orange-700">Мови</h3>
      <ul className="space-y-1">
        {langs.map((item) => (
          <li key={item} className="rounded px-2 py-1 hover:bg-orange-50 hover:text-orange-800">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Skills;

function Skills() {
  return (
    <aside className="h-fit rounded-xl border-l-4 border-indigo-400 bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-800">
      <h2 className="mb-4 text-2xl font-bold text-indigo-800 dark:text-indigo-300">Навички</h2>
      <h3 className="mb-2 text-lg font-semibold">Технології</h3>
      <ul className="mb-6 list-disc space-y-1 pl-5">
        <li>Python</li>
        <li>C#</li>
        <li>Основи HTML5 та CSS3</li>
        <li>Git / GitHub</li>
      </ul>
      <h3 className="mb-2 text-lg font-semibold">Мови</h3>
      <ul className="list-disc space-y-1 pl-5">
        <li>Українська — рідна</li>
        <li>Англійська — B1 (Intermediate)</li>
      </ul>
    </aside>
  );
}

export default Skills;

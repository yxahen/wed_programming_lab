function Experience() {
  return (
    <section className="rounded-xl border-l-4 border-indigo-400 bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-800">
      <h2 className="mb-3 text-2xl font-bold text-indigo-800 dark:text-indigo-300">Досвід та проєкти</h2>
      <article>
        <h3 className="mb-2 text-lg font-semibold">Навчальні проєкти</h3>
        <ul className="list-disc space-y-1 pl-5">
          <li>Лабораторні роботи з програмування мовами Python та C#</li>
          <li>Лабораторна робота з веб-розробки: резюме на HTML та React</li>
        </ul>
      </article>
    </section>
  );
}

export default Experience;

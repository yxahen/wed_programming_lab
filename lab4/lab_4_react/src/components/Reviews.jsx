import { useEffect, useState } from 'react';

const VARIANT = 7; // порядковий номер у журналі групи

function Reviews() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadComments() {
      try {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`
        );
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setComments(await res.json());
      } catch (e) {
        setError('Не вдалося завантажити відгуки. Спробуйте пізніше.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    loadComments();
  }, []); // [] — виконати один раз при монтуванні

  return (
    <section className="rounded-xl border-l-4 border-indigo-400 bg-white p-6 shadow-md transition hover:shadow-xl dark:bg-slate-800">
      <h2 className="mb-3 text-2xl font-bold text-indigo-800 dark:text-indigo-300">
        Відгуки роботодавців
      </h2>

      {loading && <p>Завантаження…</p>}
      {error && <p>{error}</p>}

      <div className="space-y-4">
        {comments.map((c) => (
          <article
            key={c.id}
            className="border-t border-indigo-100 pt-3 first:border-0 first:pt-0 dark:border-slate-600"
          >
            <h3 className="font-semibold capitalize">{c.name}</h3>
            <small className="text-indigo-500 dark:text-indigo-300">{c.email}</small>
            <p className="mt-1">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Reviews;
